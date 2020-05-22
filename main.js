let image = [
    "assets/images/pic-1.jpeg",
    "assets/images/pic-2.jpeg",
    "assets/images/pic-3.jpeg",
    "assets/images/pic-4.jpeg",
    "assets/images/pic-5.jpeg",
];

var imagesIndex = 0
console.log(image);

const buttons = document.querySelectorAll(".btn");
const imageDiv = document.querySelector(".image");

changeImage = () => {
    currentImage = image[imagesIndex];
    imageDiv.style.backgroundImage = `url(${currentImage})`;
    console.log("current image", currentImage);
  };

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.classList.contains("backBtn")) {
            imagesIndex--
        if (imagesIndex < 0) {
            imagesIndex = image.length - 1;
        }   
            changeImage()
        }
        if (button.classList.contains("forwardBtn")) {
            imagesIndex++
        if (imagesIndex > image.length - 1) {
            imagesIndex = 0;
        }    
            changeImage()
        }
    });
});