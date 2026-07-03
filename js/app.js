const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.querySelectorAll('.floating-card').forEach((card) => {
        card.style.animation = 'none';
    });
}

const parallaxItems = document.querySelectorAll('[data-parallax]');

if (!prefersReducedMotion && parallaxItems.length) {
    const updateParallax = () => {
        const y = window.scrollY;
        parallaxItems.forEach((item) => {
            const speed = Number(item.getAttribute('data-parallax')) || 0.1;
            item.style.transform = `translate3d(0, ${y * speed * -0.25}px, 0)`;
        });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
}

