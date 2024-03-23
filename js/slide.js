const images = [
  "/images/watch 1.png",
  "/images/pdetail-1.png",
  "/images/watch 2.png",
  "/images/pdetail-3.png",
];
let currentImageIndex = 0;

function handleSlide(option) {
  let slide = $(".slide");
  if (option == "next") {
    if (currentImageIndex >= images.length - 1) {
      console.log("max");
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
  } else {
    if (currentImageIndex <= 0) {
      currentImageIndex = images.length - 1;
    } else {
      currentImageIndex--;
    }
  }
  console.log(currentImageIndex);
  slide.attr("src", images[currentImageIndex]);
}
