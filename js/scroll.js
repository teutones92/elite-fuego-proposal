const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
    }
);

revealItems.forEach((item) => revealObserver.observe(item));

const timelineSection = document.querySelector('#timeline');
const timelineProgress = document.querySelector('.timeline-progress');

if (timelineSection && timelineProgress) {
    const updateTimelineProgress = () => {
        const rect = timelineSection.getBoundingClientRect();
        const viewport = window.innerHeight;
        const total = rect.height + viewport * 0.6;
        const seen = viewport - rect.top;
        const ratio = Math.min(Math.max(seen / total, 0), 1);
        timelineProgress.style.transform = `scaleY(${ratio})`;
    };

    updateTimelineProgress();
    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    window.addEventListener('resize', updateTimelineProgress);
}
