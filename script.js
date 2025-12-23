// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll animation for services
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });