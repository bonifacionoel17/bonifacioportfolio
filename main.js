 // JavaScript for Smooth Scrolling and Form Handling
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.'); // Simple alert for demo
            this.reset(); // Clear form
        });
        // Add a simple animation on page load
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 1s';
            document.body.style.opacity = '1';
        });
