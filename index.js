const box = document.querySelectorAll(".box");
const txt = document.querySelectorAll(".txt");
const nav_text = document.querySelectorAll(".nav_text");
const nav_home = document.querySelector(".nav_home");
const nav_about = document.querySelector(".nav_about");
const nav_portfolio = document.querySelector(".nav_portfolio");
const nav_service = document.querySelector(".nav_service");
const nav_contact = document.querySelector(".nav_contact");
const abtn = document.querySelector(".abtn");
const hbtn = document.querySelector(".hbtn");
const btn = document.querySelectorAll(".btn");
const pbtn = document.querySelector(".port");
const sbtn = document.querySelector(".sbtn");
const cbtn = document.querySelector(".cbtn");
const home_btn = document.querySelectorAll(".rsp");
const socials = document.querySelectorAll('.social');

hbtn.addEventListener("click", () => {
  if (nav_home.classList.contains("hidden")) {
    nav_home.classList.remove("hidden");
    nav_home.classList.add("block");
  } else {
    nav_home.classList.add("hidden");
    nav_home.classList.remove("block");
  }
});

abtn.addEventListener("click", () => {
  if (nav_about.classList.contains("hidden")) {
    nav_about.classList.remove("hidden");
    nav_about.classList.add("block");
  } else {
    nav_about.classList.add("hidden");
    nav_about.classList.remove("block");
  }
});

pbtn.addEventListener("click", () => {
  if (nav_portfolio.classList.contains("hidden")) {
    nav_portfolio.classList.remove("hidden");
    nav_portfolio.classList.add("block");
  } else {
    nav_portfolio.classList.add("hidden");
    nav_portfolio.classList.remove("block");
  }
});

sbtn.addEventListener("click", () => {
  if (nav_service.classList.contains("hidden")) {
    nav_service.classList.remove("hidden");
    nav_service.classList.add("block");
  } else {
    nav_service.classList.add("hidden");
    nav_service.classList.remove("block");
  }
});

cbtn.addEventListener("click", () => {
  if (nav_contact.classList.contains("hidden")) {
    nav_contact.classList.remove("hidden");
    nav_contact.classList.add("block");
  } else {
    nav_contact.classList.add("hidden");
    nav_contact.classList.remove("block");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // Read primary and secondary colors from data attributes
  const primaryColor = body.getAttribute("data-primary-color") || "#101320";
  const secondaryColor = body.getAttribute("data-secondary-color") || "#27ae60";
  const activeColor = body.getAttribute("activeColor") || "grey";

  // Apply colors to the body's background
  body.style.backgroundColor = primaryColor;
  body.style.color = primaryColor;

  for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = secondaryColor;
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = primaryColor;
  }

  
  for (let i = 0; i < socials.length; i++) {
    socials[i].style.backgroundColor = primaryColor;
  }
  for (let i = 0; i < nav_text.length; i++) {
    nav_text[i].style.color = primaryColor;

    // Add event listeners for nav_text elements
    nav_text[i].addEventListener("mouseover", function () {
      nav_text[i].style.color = activeColor;
    });

    nav_text[i].addEventListener("mouseout", function () {
      nav_text[i].style.color = primaryColor;
    });
  }

  for (let i = 0; i < txt.length; i++) {
    txt[i].style.color = activeColor;

    // Add event listeners for txt elements
    txt[i].addEventListener("mouseover", function () {
      txt[i].style.color = primaryColor;
    });

    txt[i].addEventListener("mouseout", function () {
      txt[i].style.color = activeColor;
    });
  }
});
