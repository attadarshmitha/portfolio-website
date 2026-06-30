// ===============================
// Smooth Scrolling for Navigation
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });
});


// ===============================
// Highlight Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border = "2px solid red";

        } else {

            input.style.border = "1px solid #ccc";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    }

});


// ===============================
// Navbar Shadow While Scrolling
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Fade-in Animation on Scroll
// ===============================

const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

allSections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// ===============================
// Button Hover Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", () => {

        button.style.transform = "scale(1)";

    });

});


// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {

    console.log("Welcome to Rashmitha's Portfolio Website");

});