var image = [
    "images/pic-1.jpeg",
    "images/pic-2.jpeg",
    "images/pic-3.jpeg",
    "images/pic-4.jpeg",
    "images/pic-5.jpeg",
];
console.log(image);

const buttons = document.querySelectorAll(".btn")

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.classList.contains("backBtn")) {
            console.log("back clicked");
        }
        if (button.classList.contains("forwardBtn")) {
            console.log("forward clicked");
        }
    });
});