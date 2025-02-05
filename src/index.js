// index.js
import "./styles.css";
import { homePage } from "./homepage-content.js";
import { menuPage } from "./menu-content.js";
import { contactPage } from "./contact-content.js";

const nav = (function () {

    const resetDom = ()=>{
        const content = document.getElementById("content");
        while (content.hasChildNodes()){
            content.removeChild(content.firstChild);
        };
    };

    const home = document.querySelector(".home");
    home.addEventListener("click", ()=>{
        resetDom();
        homePage();
    });

    const menu = document.querySelector(".menu");
    menu.addEventListener("click", ()=>{
        resetDom();
        menuPage();
    });

    const contact = document.querySelector(".contact");
    contact.addEventListener("click", ()=>{
        resetDom();
        contactPage();
    });

    homePage();
})();
