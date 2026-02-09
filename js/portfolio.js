/**
 * ============================================================================
 * PORTFOLIO.JS - Portfolio filtering functionality
 * Handles category-based filtering of project cards with animations
 * ============================================================================
 */

class PortfolioFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.currentFilter = 'all';

        if (this.filterButtons.length && this.projectCards.length) {
            this.init();
        }
    }

    init() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilter(btn));
        });
    }

    handleFilter(clickedBtn) {
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');

        // Get filter value
        this.currentFilter = clickedBtn.dataset.filter;

        // Filter projects with animation
        this.filterProjects();
    }

    filterProjects() {
        this.projectCards.forEach((card, index) => {
            const category = card.dataset.category;
            const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;

            if (shouldShow) {
                // Show card with staggered animation
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.transition = 'all 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            } else {
                // Hide card
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioFilter();
});
