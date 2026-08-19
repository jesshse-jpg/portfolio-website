document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Sticky Shadow Effect on Scroll
    const headerNav = document.getElementById('header-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerNav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            headerNav.style.background = 'rgba(11, 15, 25, 0.95)';
        } else {
            headerNav.style.boxShadow = 'none';
            headerNav.style.background = 'rgba(11, 15, 25, 0.85)';
        }
    });

    // 2. Mobile Navigation Toggle Menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon between bars and close symbol
            const toggleIcon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                toggleIcon.className = 'fa-solid fa-xmark';
            } else {
                toggleIcon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const toggleIcon = navToggle.querySelector('i');
                toggleIcon.className = 'fa-solid fa-bars';
            });
        });
    }

    // 3. Contact Form Submission Handling (Mock behavior)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop standard page reload

            const submitBtn = document.getElementById('submit-btn');
            const originalBtnContent = submitBtn.innerHTML;

            // Show loading feedback state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>';

            // Gather inputs (just for debugging/consoling)
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('message').value;

            console.log('Form submission received:', {
                name: nameInput,
                email: emailInput,
                message: messageInput
            });

            // Simulate server network delay of 1.2 seconds
            setTimeout(() => {
                // Success message rendering
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message was sent successfully.';
                
                // Clear the form fields
                contactForm.reset();

                // Restore submit button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;

                // Clear status message after 5 seconds
                setTimeout(() => {
                    formStatus.innerHTML = '';
                    formStatus.className = 'form-status';
                }, 5000);

            }, 1200);
        });
    }
});
