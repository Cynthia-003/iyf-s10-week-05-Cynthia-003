// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// 1. The h1 element
const h1 = document.querySelector("h1");

// 2. All elements with class "content"
const contents = document.querySelectorAll(".content");

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");

// 4. The email input
const emailInput = document.querySelector('input[type="email"]');
// OR if it has an id:
// const emailInput = document.getElementById("email");

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");