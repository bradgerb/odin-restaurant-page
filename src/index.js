// index.js
import "./styles.css";
import { homePage } from "./homepage-content.js";
import { menuPage } from "./menu-content.js";
import { contactPage } from "./contact-content.js";

const nav = (function () {
    const home = document.querySelector(".home");
    home.addEventListener("click", homePage);

    const menu = document.querySelector(".menu");
    menu.addEventListener("click", menuPage);

    const contact = document.querySelector(".contact");
    contact.addEventListener("click", contactPage);
})();
