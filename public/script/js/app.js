// ------------PARTIE JS ---------
import {menuDiner,menuBreakfast,menuLunch,menuStarters,lunchClick,startClick,breakClick,dinnerClick} from "./module/menu.js"
lunchClick.addEventListener("click", menuLunch)
startClick.addEventListener("click", menuStarters)
breakClick.addEventListener("click", menuBreakfast)
dinnerClick.addEventListener("click", menuDiner)

//events carousel
let eventsCarouselBtn = document.querySelectorAll(".carouselBtnEvents > button");
let eventsView = document.querySelector(".eventsView");

for (let i = 0; i < eventsCarouselBtn.length; i++) {
    eventsCarouselBtn[i].addEventListener("click", ()=>{
        eventsView.style.transform = `translateX(${-(eventsCarouselBtn[i].value)*20}%)`
        //btn active color
        document.querySelector(".btnActiveEvents").className="";
        eventsCarouselBtn[i].className="btnActiveEvents";
    })
}
//-------------------------------------------------------
//events carousel
let galleryCarouselBtn = document.querySelectorAll(".carouselBtnGallery > button");
let galleryCarousel = document.querySelector(".galleryCarousel");
let galleryItems = document.querySelectorAll(".galleryCarouselItem > img");

// console.log(galleryCarouselBtn);
// console.log(galleryItems);

for (let i = 0; i < galleryCarouselBtn.length; i++) {
    galleryCarouselBtn[i].addEventListener("click", ()=>{
        galleryCarousel.style.transform = `translateX(${40 -(galleryCarouselBtn[i].value)*20}%)`
        //btn active color
        document.querySelector(".btnActiveGallery").className="";
        galleryCarouselBtn[i].className="btnActiveGallery";
        //img active
        document.querySelector(".imgActiveGallery").className="";
        galleryItems[i].className="imgActiveGallery"
    })
}

//testimonial carousel
let testimonialCarouselBtn = document.querySelectorAll(".carouselBtn > button");
let carouselItems = document.querySelector(".containerCarousel");

//btn carousel testimonial
for (let i = 0; i < testimonialCarouselBtn.length; i++) {
    testimonialCarouselBtn[i].addEventListener("click", ()=>{
        carouselItems.style.transform = `translateX(${-(testimonialCarouselBtn[i].value)*25}%)`;
        //btn active color
        document.querySelector(".btnActive").className="";
        testimonialCarouselBtn[i].className="btnActive";
    })
}

//nav modal
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelector(".btnbooktable");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 