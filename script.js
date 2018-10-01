// service unavailable
let seeAll = document.querySelectorAll(".see-all");

let featureDown = function() {
  alert("The feature is not available yet.");
}

seeAll.forEach(function(seeAllEach) {
  seeAllEach.addEventListener("click", featureDown);
})

// select an array of all images
let images = document.querySelectorAll(".card");

let openLink = function() {
  window.open("https://www.google.com");
}

images.forEach(function(image) {
  image.addEventListener("click", openLink);
})
