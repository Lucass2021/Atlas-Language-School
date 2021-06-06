let time = 3100,
    currentImageIndex = 0,
    images = document.querySelectorAll(".slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected");

}



function changeBanner() {
    setInterval(() => {
        //Change Image 
        nextImage()
    }, time)
}

window.addEventListener("load", changeBanner);