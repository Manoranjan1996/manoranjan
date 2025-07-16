// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // RSVP Form Handling
    const rsvpForm = document.getElementById('rsvp-form');
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const rsvpData = {
            name: formData.get('guest-name'),
            email: formData.get('guest-email'),
            attendance: formData.get('attendance'),
            guests: formData.get('guests'),
            dietary: formData.get('dietary'),
            message: formData.get('message')
        };

        // Validate required fields
        if (!rsvpData.name || !rsvpData.email || !rsvpData.attendance) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Simulate form submission
        showLoadingState();
        
        // Simulate API call delay
        setTimeout(() => {
            hideLoadingState();
            showNotification('Thank you for your RSVP! We can\'t wait to celebrate with you.', 'success');
            rsvpForm.reset();
            
            // Log form data (in real app, this would be sent to server)
            console.log('RSVP Submitted:', rsvpData);
        }, 2000);
    });

    // Show loading state for form submission
    function showLoadingState() {
        const submitButton = document.querySelector('.submit-button');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
    }

    // Hide loading state
    function hideLoadingState() {
        const submitButton = document.querySelector('.submit-button');
        submitButton.innerHTML = 'Send RSVP';
        submitButton.disabled = false;
    }

    // Show notification
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;

        // Add notification to body
        document.body.appendChild(notification);

        // Close notification functionality
        const closeButton = notification.querySelector('.notification-close');
        closeButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            margin-left: 10px;
        `;

        closeButton.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Add slideInRight animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Enhanced hover effects for touch devices
    if ('ontouchstart' in window) {
        const hoverElements = document.querySelectorAll('.zoom-hover, .rotate-hover, .grayscale-hover');
        
        hoverElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 300);
            });
        });

        // Add touch-specific styles
        const touchStyle = document.createElement('style');
        touchStyle.textContent = `
            .touch-active.zoom-hover {
                transform: scale(1.02) !important;
            }
            .touch-active.rotate-hover {
                transform: rotate(1deg) !important;
            }
            .touch-active.grayscale-hover {
                filter: grayscale(0%) !important;
            }
        `;
        document.head.appendChild(touchStyle);
    }

    // Parallax effect for hero section (desktop only)
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                const speed = scrolled * 0.3;
                heroImage.style.transform = `translateY(${speed}px)`;
            }
        });
    }

    // Image preloading for better performance
    const imageElements = document.querySelectorAll('.hero-image, .story-image, .gallery-image');
    imageElements.forEach((element, index) => {
        // Add a subtle gradient background while "loading"
        element.style.background = `linear-gradient(45deg, 
            hsl(${30 + index * 10}, 45%, 65%), 
            hsl(${40 + index * 15}, 35%, 80%))`;
    });

    // CTA button scroll to story section
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const storySection = document.getElementById('story');
        if (storySection) {
            const offsetTop = storySection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });

    // Enhance gallery interaction
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Log gallery interaction (could be used for analytics)
            console.log(`Gallery item ${index + 1} clicked`);
        });
    });

    // Form field validation enhancements
    const formInputs = document.querySelectorAll('.rsvp-form input, .rsvp-form select, .rsvp-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Remove error styling on input
            this.style.borderColor = '';
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        }

        // Apply visual feedback
        if (!isValid && value) {
            field.style.borderColor = '#f44336';
        } else {
            field.style.borderColor = '';
        }

        return isValid;
    }

    // Initialize animations with stagger effect
    setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            if (isElementInViewport(element)) {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 100);
            }
        });
    }, 500);

    // Helper function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Performance optimization: Debounce scroll events
    let ticking = false;
    function updateOnScroll() {
        // Update navbar background
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    console.log('Wedding app initialized successfully! 💒✨');
});
