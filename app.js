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

    //Get the fullpage div text
    var fullpageText = document.querySelector("#fullpage-text");

    // Set the text of the new p tag
    fullpageText.textContent = text;

    // Display the fullpage div
    fullpage.style.display = "block";

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";
  });
});

// Add a click event listener to the fullpage div
fullpage.addEventListener("click", function () {
  // Enable scrolling on the body
  document.body.style.overflow = "auto";
});

