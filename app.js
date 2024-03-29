import { SplitText } from "./assets/splitText.js";

function getPics() {} //just for this demo
const imgs = document.querySelectorAll(".gallery img");
const fullPage = document.querySelector("#fullpage");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
  });
});

// Get all image elements
var images = document.querySelectorAll(".work-item-wrapper img");

// Add a click event listener to each image
images.forEach(function (image) {
  image.addEventListener("click", function () {
    // Get the text of the sibling p tag
    var text = this.nextElementSibling.textContent;

    // Get the fullpage div
    var fullpage = document.querySelector("#fullpage");

    // Create a new p tag
    var newPTag = document.querySelector(".fullscreen-big-text");

    // Set the text of the new p tag
    newPTag.textContent = text;

    // Append the new p tag to the fullpage div
    fullpage.appendChild(newPTag);

    // Display the fullpage div
    fullpage.style.display = "block";

    // Disable scrolling on the body
    document.body.classList.toggle("no-scroll");
    document.html.classList.toggle("no-scroll");
  });
});

// Add a click event listener to the fullpage div
fullpage.addEventListener("click", function () {
  // Enable scrolling on the body
  document.body.classList.toggle("no-scroll");
});

// Animations

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", (event) => {
  console.log(event);
  let main = document.querySelector(".main");
  main.style.display = "block";
  const tl = gsap.timeline();
  tl.to(".preloader", { scaleY: 0, duration: 0.6, ease: Power2.easeInOut, transformOrigin: "top center" }, 0);
  tl.from(".hero-text-word", { y: "101%", duration: 0.5, ease: Power2.easeOut, stagger: 0.05 }, "details");
  tl.from(".nav-text", { y: "101%", duration: 0.5, ease: Power2.easeOut, stagger: 0.05 }, "details");
  tl.from(".hero-bottom-nav-text h2", { y: "101%", duration: 0.5, ease: Power2.easeOut, stagger: 0.05 }, "details");
});

//Work Images Load in
ScrollTrigger.batch(".work-item-wrapper", {
  once: true,
  onEnter: (batch) => {
    gsap.from(batch, { duration: 0.7, yPercent: 70, stagger: 0.02 });
  },
});

// Info

const infoButton = document.querySelector("#info");
const info = document.querySelector(".info-wrapper");
const close = document.querySelector(".nav-text.close-btn");

console.log(info);

infoButton.addEventListener("click", (event) => {
  console.log("hello");
  info.classList.toggle("hide");
  document.body.classList.toggle("no-scroll");
  document.html.classList.toggle("no-scroll");
});

close.addEventListener("click", (event) => {
  console.log("goodbye");
  info.classList.toggle("hide");
  document.body.classList.toggle("no-scroll");
  document.html.classList.toggle("no-scroll");
});

const infoLink = document.querySelector(".info-link");

infoLink.addEventListener("mouseover", (event) => {
  console.log("hover");
});
