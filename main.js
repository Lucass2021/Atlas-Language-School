// =====Banner Slider =====

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



// =====Testimonial Owl Slider =====

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    nav: true,
    margin: 500,
    responsive: {
        0: {
            items: 1
        }
    }
})

// =====Menu Responsive Toggle=====
const nav = document.getElementById("navLinks");

function showMenu() {
    nav.style.right = "0";
}

function hideMenu() {
    nav.style.right = "-200px";
}
