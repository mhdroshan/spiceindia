// Spice Bin - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {

    // Parallax Effect for Hero Section
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Parallax Logic: Move background slower than foreground
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Micro-interactions for Spices (Optional enhancement)
    // Could add custom mouse tracking for hover effects here later

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        // Create Backdrop
        const backdrop = document.createElement('div');
        backdrop.classList.add('mobile-backdrop');
        document.body.appendChild(backdrop);

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            backdrop.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            toggleMenu();
        });

        backdrop.addEventListener('click', closeMenu);

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
