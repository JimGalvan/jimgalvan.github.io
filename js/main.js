document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('#skills .bg-blue-500').forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.getAttribute('style').split(':')[1].trim();
        }, 100);
    });

    var typed = new Typed('#typed-text', {
        strings: [
            'Senior Software Test Engineer',
            'Senior QA Automation Engineer',
            'Test Automation Specialist',
            'Medical Device Testing Expert',
            'SDET (Software Development Engineer in Test)'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    AOS.init();

    const lightbox = GLightbox({
        selector: 'glightbox'
    });

    gsap.from(".fade-in", { duration: 2, opacity: 0, y: -50, ease: "power1.out" });
});