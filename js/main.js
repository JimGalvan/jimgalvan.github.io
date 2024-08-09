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
        strings: ["Software Engineer", "Test Automation Engineer", "QA Engineer"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
    });

    AOS.init();

    const lightbox = GLightbox({
        selector: 'glightbox'
    });

    gsap.from(".fade-in", { duration: 2, opacity: 0, y: -50, ease: "power1.out" });
});