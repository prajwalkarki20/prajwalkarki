// ===================== MOBILE MENU TOGGLE =====================
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================== ACTIVE NAVIGATION HIGHLIGHT =====================
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================== SMOOTH SCROLL BEHAVIOR =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================== FORM SUBMISSION =====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
            message: contactForm.querySelector('textarea').value
        };
        
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
}

// ===================== SCROLL ANIMATION =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
const cards = document.querySelectorAll('.project-card, .feature-card, .skill-category, .stat');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===================== PARALLAX SCROLL EFFECT =====================
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY < hero.clientHeight) {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    }
});

// ===================== TYPING ANIMATION FOR TITLE =====================
function typeWriter(element, text, speed = 50) {
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

// Uncomment to enable typing animation on page load
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     typeWriter(heroTitle, "Hi, I'm Prajwal");
// });

// ===================== BUTTON RIPPLE EFFECT =====================
const buttons = document.querySelectorAll('.btn, .project-link');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===================== SCROLL TO TOP BUTTON =====================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
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

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
});

// ===================== DYNAMIC CONTENT ANIMATION =====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-text p, .contact-info p');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            el.style.animation = 'slideInLeft 0.8s ease forwards';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// ===================== PROJECT HOVER EFFECTS =====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================== SKILL TAGS ANIMATION =====================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animation = `slideInLeft ${0.5 + index * 0.1}s ease forwards`;
    tag.style.opacity = '0';
});

// ===================== STATISTICS COUNTER =====================
const stats = document.querySelectorAll('.stat h3');
const startCounter = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + '+';
                setTimeout(updateCount, 30);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Trigger animation when stats section is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !stat.dataset.counted) {
                stat.dataset.counted = 'true';
                updateCount();
            }
        });
        
        observer.observe(stat);
    });
};

startCounter();

// ===================== LOAD EVENT =====================
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add subtle animations to elements
    const allElements = document.querySelectorAll('section');
    allElements.forEach((el, index) => {
        el.style.animation = `fadeIn 0.8s ease ${index * 0.2}s forwards`;
        el.style.opacity = '0';
    });
});

// ===================== KEYBOARD NAVIGATION =====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===================== THEME PREFERENCES =====================
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
if (prefersLight.matches) {
    document.documentElement.style.colorScheme = 'light';
}

// ===================== UTILITY ANIMATIONS =====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
    }
`;

document.head.appendChild(style);

console.log('✨ Interactive Portfolio Initialized Successfully! ✨');
