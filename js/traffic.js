/**
 * Traffic Counter Script
 * Uses a stable public API to track and display page views for each page independently.
 */

async function initTrafficCounter() {
    const counterElement = document.getElementById('pageViews');
    if (!counterElement) return;

    // Use a unique namespace and key for counterapi.dev
    const namespace = 'snixrs-portfolio';
    const path = window.location.pathname.replace(/\//g, '_').replace('.html', '') || 'home';
    const key = `page_${path}`;

    try {
        // Switching to counterapi.dev (more stable alternative to CountAPI)
        const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);

        if (response.ok) {
            const data = await response.json();
            const count = data.count;

            // Log the count in console as requested
            console.log(`Traffic: ${count}`);

            // Format number (e.g., 1,234)
            const formattedCount = new Intl.NumberFormat().format(count);

            counterElement.innerHTML = `
                <span class="view-counter-badge">
                    <i class="fas fa-eye"></i>
                    <span class="view-count-number">${formattedCount}</span>
                </span>
            `;
            counterElement.classList.add('visible');
        } else {
            console.warn('Traffic counter API returned an error.');
            counterElement.style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching traffic data:', error);
        counterElement.style.display = 'none';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initTrafficCounter);
