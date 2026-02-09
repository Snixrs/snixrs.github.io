/**
 * ============================================================================
 * MAIN.JS - Core website functionality
 * Handles navigation, scroll effects, animations, and interactions
 * ============================================================================
 */

// ============================================================================
// NAVBAR SCROLL BEHAVIOR
// ============================================================================

class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        if (this.navbar) {
            this.init();
        }
    }

    init() {
        // Scroll behavior
        window.addEventListener('scroll', () => this.handleScroll());

        // Mobile menu toggle
        if (this.mobileMenuToggle && this.mobileMenu) {
            this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());

            // Close menu on link click
            this.mobileMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });
        }

        // Active nav link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.mobileMenuToggle.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.mobileMenuToggle.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================================================
// SCROLL PROGRESS BAR
// ============================================================================

class ScrollProgress {
    constructor() {
        this.progressBar = document.getElementById('scrollProgress');
        if (this.progressBar) {
            window.addEventListener('scroll', () => this.updateProgress());
        }
    }

    updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        this.progressBar.style.width = `${progress}%`;
    }
}

// ============================================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================================

class ScrollReveal {
    constructor() {
        this.reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-reveal');
        if (this.reveals.length) {
            this.init();
        }
    }

    init() {
        // Check on load
        this.checkReveal();
        // Check on scroll
        window.addEventListener('scroll', () => this.checkReveal());
    }

    checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        this.reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
}

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

class SmoothScroll {
    constructor() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    }

    handleClick(e, anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ============================================================================
// STATS COUNTER ANIMATION
// ============================================================================

class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number[data-count]');
        this.animated = false;

        if (this.stats.length) {
            window.addEventListener('scroll', () => this.checkAnimate());
        }
    }

    checkAnimate() {
        if (this.animated) return;

        const statsSection = document.getElementById('stats');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            this.animateCounters();
            this.animated = true;
        }
    }

    animateCounters() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString() + '+';
                }
            };

            updateCounter();
        });
    }
}

// ============================================================================
// COPY TO CLIPBOARD
// ============================================================================

function copyEmail() {
    const emailAddress = document.getElementById('emailAddress');
    const copyBtn = document.getElementById('copyEmail');

    if (!emailAddress || !copyBtn) return;

    navigator.clipboard.writeText(emailAddress.textContent).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    });
}

// ============================================================================
// CONTACT FORM (Static - shows confirmation)
// ============================================================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // For GitHub Pages (static), show a message
        // In production, you'd send this to a service like Formspree, Netlify Forms, etc.
        alert('Thank you for your message! Since this is a static site, please send your message directly to the email address shown above.');

        // Reset form
        this.form.reset();
    }
}

// ============================================================================
// INITIALIZE ALL MODULES
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
    new ScrollProgress();
    new ScrollReveal();
    new SmoothScroll();
    new StatsCounter();
    new ContactForm();

    // Add loaded class for initial animations
    document.body.classList.add('loaded');
});

// Make copyEmail available globally
window.copyEmail = copyEmail;
