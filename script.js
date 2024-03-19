/* ----- BASE ------ */

// get required selectors to maniplute menu toggle
const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

/* -- show/hide menu -- */
menuTogglersContainer.addEventListener("click", () => {
  // if navbar tag have show-nav in as class
  navbar.classList.toggle("show-nav");
});


// --- prevent form submission on contact section ---
const sendMsgButton = document.querySelector(".send-msg-btn");
sendMsgButton.addEventListener("click", (e) => {
  e.preventDefault();
});






