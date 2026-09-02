// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple reveal animation on scroll
const cards = document.querySelectorAll('.card');

const revealOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animation = "fadeIn 0.8s ease-out forwards";
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

cards.forEach(card => {
    card.style.opacity = "0"; // hide initially for animation
    revealOnScroll.observe(card);
});
