/* ================================
EMBER RESTAURANT
JavaScript
================================ */

/* ================================

1. MOBILE NAVIGATION
    ================================ */

const menuToggle = document.querySelector(”.menu-toggle”);
const navMenu = document.querySelector(”.nav-menu”);
const navLinks = document.querySelectorAll(”.nav-menu a”);

menuToggle.addEventListener(“click”, () => {

const isOpen = navMenu.classList.toggle("active");
menuToggle.setAttribute("aria-expanded", isOpen);

});

navLinks.forEach((link) => {

link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
});

});

/* ================================
2. MENU FILTERING
================================ */

const filterButtons = document.querySelectorAll(”.filter-btn”);
const menuCards = document.querySelectorAll(”.menu-card”);

filterButtons.forEach((button) => {

button.addEventListener("click", () => {
    const category = button.dataset.category;
    /* Update active button */
    filterButtons.forEach((btn) => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
    /* Filter menu items */
    menuCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

});

/* ================================
3. RESERVATION FORM
================================ */

const reservationForm = document.querySelector(”.reservation-form”);
const formMessage = document.querySelector(”.form-message”);

reservationForm.addEventListener(“submit”, (event) => {

event.preventDefault();
const name = document.querySelector("#name").value.trim();
const email = document.querySelector("#email").value.trim();
const date = document.querySelector("#date").value;
const guests = document.querySelector("#guests").value;
if (!name || !email || !date || !guests) {
    formMessage.textContent =
        "Please complete all required fields.";
    return;
}
formMessage.textContent =
    `Thank you, ${name}. Your reservation request has been received.`;
reservationForm.reset();

});

/* ================================
4. PREVENT PAST RESERVATION DATES
================================ */

const dateInput = document.querySelector(”#date”);

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, “0”);
const day = String(today.getDate()).padStart(2, “0”);

const todayFormatted = ${year}-${month}-${day};

dateInput.min = todayFormatted;

/* ================================
5. SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
“.about-content, .about-images, .menu-card, .chef-content, .chef-image, .gallery-grid img, .reservation-content, .reservation-form, .contact-content”
);

const revealObserver = new IntersectionObserver(
(entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
        }
    });
},
{
    threshold: 0.12
}

);

revealElements.forEach((element) => {

element.classList.add("reveal");
revealObserver.observe(element);

});

/* ================================
6. HEADER BACKGROUND ON SCROLL
================================ */

const header = document.querySelector(”.header”);

window.addEventListener(“scroll”, () => {

if (window.scrollY > 50) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

});