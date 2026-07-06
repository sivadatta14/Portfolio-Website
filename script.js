document.addEventListener('DOMContentLoaded', () => {

    // GSAP & Typed.js Startup Animation
    const startupTimeline = gsap.timeline({
        onComplete: () => {
            // Allow scrolling after animation
            document.body.style.overflow = 'auto';
        }
    });

    // Initial state: Body overflow hidden
    document.body.style.overflow = 'hidden';

    // 1. Typed.js for "SIVA DATTA POTHAMSETTI"
    const typed = new Typed('#startup-text', {
        strings: ['SIVA DATTA POTHAMSETTI'],
        typeSpeed: 50,
        showCursor: false,
        onComplete: () => {
            // 2. Neon Glow Effect on name
            gsap.to('#startup-text', {
                textShadow: "0 0 20px #00f3ff, 0 0 40px #00f3ff",
                color: "#fff",
                duration: 0.5,
                onComplete: typeSubtitle
            });
        }
    });

    function typeSubtitle() {
        // 3. Type the subtitle
        const typedSubtitle = new Typed('#startup-subtitle', {
            strings: ['AI Student | Front-End Developer'],
            typeSpeed: 40,
            showCursor: false,
            onComplete: () => {
                // 4. Glow effect on subtitle
                gsap.to('#startup-subtitle', {
                    textShadow: "0 0 15px #bc13fe, 0 0 30px #bc13fe",
                    duration: 0.5,
                    onComplete: moveNameUp
                });
            }
        });
    }

    function moveNameUp() {
        // Fade out the background first
        gsap.to('#startup-overlay', {
            backgroundColor: 'transparent',
            duration: 1,
            delay: 0.5
        });

        // Move BOTH text elements up together
        gsap.to('.startup-content', {
            y: -window.innerHeight / 2 + 100,
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                document.getElementById('startup-overlay').style.display = 'none';
                revealSite();
            }
        });
    }

    function revealSite() {
        const mainContent = document.getElementById('main-content');
        mainContent.style.visibility = 'visible';

        // Set hero name text
        document.querySelector('.hero-name-placeholder').textContent = "SIVA DATTA POTHAMSETTI";

        gsap.to(mainContent, {
            opacity: 1,
            duration: 1
        });

        // Animate Hero Elements
        gsap.from('.hero-image-wrapper', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2
        });

        gsap.from('.hero-subtitle', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5
        });

        gsap.from('.hero-description', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.7
        });

        gsap.from('.hero-buttons', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.9
        });

        // Header reveal
        gsap.from('.glass-nav', {
            y: -100,
            duration: 1,
            delay: 1
        });
    }

    // ScrollReveal - Optimized for smoother performance
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 600,
        delay: 100,
        easing: 'ease-out',
        reset: false
    });

    sr.reveal('.about-card');
    sr.reveal('.timeline-item', { interval: 150 });
    sr.reveal('.skill-card', { interval: 80 });
    sr.reveal('.cert-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 150 });
    sr.reveal('.contact-buttons');

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');

        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Floating animation for Hero Image
    gsap.to('.hero-image-wrapper', {
        y: '-=15',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});