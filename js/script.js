// ==========================================
// DARK MODE TOGGLE
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to auto
const currentTheme = localStorage.getItem('theme') || 'auto';

function setTheme(theme) {
    if (theme === 'auto') {
        // Use system preference
        if (prefersDarkScheme.matches) {
            htmlElement.removeAttribute('data-theme');
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
        }
    } else {
        htmlElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = !theme || theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'auto') {
        setTheme('auto');
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// ==========================================
// SCROLL INDICATOR HIDE
// ==========================================

const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});

// ==========================================
// FORM VALIDATION
// ==========================================

const contactForm = document.getElementById('contactForm');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(formData) {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
        errors.subject = 'Subject must be at least 5 characters long';
    }

    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
}

function displayFormErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.remove());
    document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));

    // Display new errors
    if (Object.keys(errors).length > 0) {
        Object.keys(errors).forEach(fieldName => {
            const fieldElement = document.getElementById(fieldName);
            if (fieldElement) {
                fieldElement.parentElement.classList.add('error');
                const errorElement = document.createElement('span');
                errorElement.className = 'form-error';
                errorElement.textContent = errors[fieldName];
                fieldElement.parentElement.appendChild(errorElement);
            }
        });
    }
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
        // Form is valid
        displayFormErrors({});
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);

        // Note: In a real application, you would send the data to a backend server
        console.log('Form Data:', formData);

        // Example of how to send to a backend (commented out):
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    } else {
        displayFormErrors(errors);
    }
});

// ==========================================
// ADD FORM STYLES FOR ERRORS
// ==========================================

const formStyles = document.createElement('style');
formStyles.textContent = `
    .form-group.error input,
    .form-group.error textarea {
        border: 2px solid #ff6b6b;
        background-color: rgba(255, 107, 107, 0.1);
    }

    .form-error {
        color: #ff6b6b;
        font-size: 0.85rem;
        margin-top: 0.25rem;
        display: block;
    }

    .form-success {
        background-color: #51cf66;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        animation: slideInDown 0.3s ease-out;
    }

    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(formStyles);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .about-text, .project-card, .achievement-card, .skill-category, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const navLinks = document.querySelectorAll('.nav-menu a.scroll-link');

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - navHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active styles
const navStyles = document.createElement('style');
navStyles.textContent = `
    .nav-menu a.scroll-link.active {
        color: var(--primary-color);
    }

    .nav-menu a.scroll-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyles);

// ==========================================
// RESUME DOWNLOAD HANDLER
// ==========================================

const resumeDownload = document.getElementById('resumeDownload');

resumeDownload.addEventListener('click', (e) => {
    // Check if file exists
    fetch('assets/documents/resume.pdf', { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                e.preventDefault();
                alert('Resume file not found. Please add your resume.pdf to assets/documents/ folder.');
            }
        })
        .catch(error => {
            // File doesn't exist or error checking
            console.log('Resume file not found:', error);
        });
});

// ==========================================
// TYPING ANIMATION (Optional Enhancement)
// ==========================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing animation on hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const text = heroSubtitle.textContent;
//     typeWriter(heroSubtitle, text);
// }

// ==========================================
// PARTICLES ANIMATION (Optional)
// ==========================================

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.prepend(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Uncomment to enable particles
// createParticles();

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'var(--shadow)';
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy loading images (when images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==========================================
// ANALYTICS TRACKING (Optional)
// ==========================================

// Example: Track button clicks
document.querySelectorAll('.btn, .link-btn, .social-icon').forEach(element => {
    element.addEventListener('click', () => {
        // Send analytics event
        // Example: gtag('event', 'click', { element: element.textContent });
        console.log('Clicked:', element.textContent);
    });
});

// ==========================================
// INITIALIZATION
// ==========================================

console.log('%cPortfolio Website Loaded Successfully! 🚀', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('%cFeatures Enabled:', 'color: #764ba2; font-weight: bold;');
console.log('✓ Dark/Light Mode Toggle');
console.log('✓ Smooth Scrolling Navigation');
console.log('✓ Form Validation');
console.log('✓ Mobile Responsive Menu');
console.log('✓ Scroll Animations');
console.log('✓ Intersection Observer');
console.log('✓ Scroll to Top Button');
