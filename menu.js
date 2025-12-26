const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Dapatkan URL saat ini
const currentURL = window.location.href;

// Loop melalui setiap link dan tambahkan kelas 'active' ke link yang sesuai
navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('active');
    }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});