document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', () => {
        const progressBar = document.getElementById('progress-bar');
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});