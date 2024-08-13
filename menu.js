const navLinks = document.querySelectorAll('.nav-link');

// Dapatkan URL saat ini
const currentURL = window.location.href;

// Loop melalui setiap link dan tambahkan kelas 'active' ke link yang sesuai
navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('active');
    }
});