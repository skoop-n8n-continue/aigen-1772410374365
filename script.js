/**
 * Digital Signage Application - Hello World
 * Cache busting is handled via version parameters in the HTML.
 */

window.onload = () => {
    console.log("Hello World app initialized.");
    
    // Simple logic for digital signage check
    const container = document.querySelector('.container');
    if (container) {
        // Optional: Adding a small animation loop for visual interest
        setInterval(() => {
            container.style.transition = 'all 1s ease-in-out';
            container.style.opacity = Math.random() > 0.5 ? '1' : '0.8';
        }, 2000);
    }
};
