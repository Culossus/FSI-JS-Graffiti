let header = document.querySelector("#page-header");

header.style.textAlign = "Right";

let dogImages = document.querySelectorAll(".dog-image");

for (let x = 0; x < dogImages.length; x++) {
  dogImages[x].style.borderRadius = "50px";
  dogImages[x].style.transform = "scaleY(-1)";
}
// Select some elements...
let dogNames = document.querySelectorAll(".dog-name");

for (let x = 0; x < dogNames.length; x++) {
  dogNames[x].style.textAlign = "left";
}

let footer = document.querySelector(".footer");

footer.style.color = "red";
footer.style.borderStyle = "solid";
