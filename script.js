document.addEventListener("DOMContentLoaded", () => {
    // Simulate loading delay and show content
    setTimeout(() => toggleVisibility("loading-screen", "main-content"), 2000);
});

// Toggle visibility of elements
function toggleVisibility(hideId, showId) {
    const hideElement = document.getElementById(hideId);
    const showElement = document.getElementById(showId);

    if (hideElement) hideElement.style.display = "none";
    if (showElement) showElement.style.display = "block";
}

// Handle navbar visibility on scroll
const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => handleNavbarScroll());

// Check if screen is mobile-sized
const isMobile = () => window.innerWidth <= 768;

// Scroll handler for navbar visibility
function handleNavbarScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!isMobile()) {
        navbar.style.transform = currentScroll > lastScrollTop ? "translateY(-100%)" : "translateY(0)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    lastScrollTop = Math.max(currentScroll, 0); // Prevent negative scrolling
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the hamburger menu and nav links
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    // Check if hamburgerMenu exists to prevent errors
    if (hamburgerMenu) {
        // Toggle the 'active' class when hamburger menu is clicked
        hamburgerMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active"); // Toggles visibility of the nav links
            hamburgerMenu.classList.toggle("active"); // Animate hamburger to a cross
        });
    }

    // Close the menu when a link is clicked on mobile
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Only close the menu on mobile, not on desktop
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
                hamburgerMenu.classList.remove("active");
            }
        });
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Preloader handler
window.addEventListener("load", () => toggleVisibility("loading-bar-container", null));

// Initialize Particles.js
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            shape: { type: "circle", stroke: { width: 0, color: "#000" } },
            opacity: {
                value: 0.5,
                anim: { enable: true, speed: 1, opacity_min: 0.1 }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 40, size_min: 0.1 }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });
}
