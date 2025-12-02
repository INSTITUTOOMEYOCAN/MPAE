const hamburger = document.querySelector('.hamburger');
const navWrap = document.querySelector('.nav-wrap');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navWrap.classList.toggle('mobile-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navWrap.classList.remove('mobile-open');
    });
});
