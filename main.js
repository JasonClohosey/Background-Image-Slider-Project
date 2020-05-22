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
            console.log("imageIndex Should decrease", imagesIndex);
            changeImage()
        }
        if (button.classList.contains("forwardBtn")) {
            imagesIndex++
            console.log("imageIndex Should increase", imagesIndex);
            changeImage()
        }
    // for (let i = 0; i < image.length; i++) {
    //     const nextImage = image[i];
    //     console.log(nextImage)
    //     document.querySelector(".image").style.backgroundImage = `url("images/pic-${nextImage}")`;
    //     console.log(nextImage)
    // }
        


    });
});