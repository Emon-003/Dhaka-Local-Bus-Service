// js/main.js

// Common functionality for Dhaka Local Bus Services
document.addEventListener('DOMContentLoaded', function() {
    // Route toggle functionality with error handling
    const toggleButtons = document.querySelectorAll('.toggle-route-info');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            try {
                const routeInfo = this.nextElementSibling;
                // Ensure the next element exists and has the expected class
                if (!routeInfo || !routeInfo.classList.contains('shared-route-info')) {
                    // This error indicates a mismatch between JS expectation and HTML structure
                    throw new Error('Route info element not found or incorrect class for toggle.');
                }

                const isHidden = routeInfo.classList.contains('hidden');

                // Toggle the hidden class to show/hide the content
                routeInfo.classList.toggle('hidden');

                // Update button text and ARIA attribute for accessibility
                this.textContent = isHidden ? 'Hide Shared Route' : 'Show Shared Route';
                this.setAttribute('aria-expanded', isHidden.toString()); // ARIA attribute expects string 'true'/'false'

                // Add a temporary loading state for visual feedback
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 300); // Remove loading state after 300ms
            } catch (error) {
                console.error('Error toggling route info:', error);

                // Create and display a user-friendly error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message'; // This class needs CSS for styling
                errorMessage.textContent = 'Unable to show route information. Please try again.';
                // Insert the error message directly after the button
                this.parentNode.insertBefore(errorMessage, this.nextSibling);

                // Remove the error message after 3 seconds
                setTimeout(() => {
                    errorMessage.remove();
                }, 3000);
            }
        });
    });

    // Add loading state to bus route links when clicked
    // Note: Your HTML uses 'bttn' class, not 'btn'. I've updated the selector.
    const busRouteLinks = document.querySelectorAll('.bus-list .bttn');
    busRouteLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            this.classList.add('loading'); // Add loading class to the clicked link
            // In a real application, you might remove this class on a successful
            // page load or if navigation is prevented.
            // This 'beforeunload' listener attempts to remove it if navigation is cancelled.
            window.addEventListener('beforeunload', () => {
                this.classList.remove('loading');
            });
        });
    });

    // Implement smooth scrolling for all anchor links pointing to IDs on the same page
    // Note: Your current HTML does not have any anchor links with href starting with '#'
    // that link to sections on the same page. This functionality will only work if you
    // add such links (e.g., <a href="#some-section-id">Go to Section</a>)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default jump-to-anchor behavior
            const target = document.querySelector(this.getAttribute('href')); // Get the target element

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // Enable smooth scrolling
                    block: 'start' // Align the top of the target with the top of the viewport
                });
            }
        });
    });
});