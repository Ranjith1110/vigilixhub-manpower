document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const linksContainer = document.getElementById('mobile-links-container');

    // --- Actions ---

    function openMenu() {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);

        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');

        // Trigger staggered animations
        setTimeout(() => {
            linksContainer.classList.add('mobile-menu-open');
        }, 200);
    }

    function closeMenu() {
        linksContainer.classList.remove('mobile-menu-open');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');

        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 500);
    }

    // --- Event Listeners ---
    mobileBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Sticky Navbar Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm');
            // Make navbar slightly more compact on scroll
            navbar.classList.remove('bg-white/80');
            navbar.classList.add('bg-white/95');
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white/95');
        }
    });
});