// ------------PARTIE MENU EN JS APPELLE DES FONCTIONS ---------
import {menuDiner,menuBreakfast,menuLunch,menuStarters,lunchClick,startClick,breakClick,dinnerClick} from "./module/menu.js"
lunchClick.addEventListener("click", menuLunch)
startClick.addEventListener("click", menuStarters)
breakClick.addEventListener("click", menuBreakfast)
dinnerClick.addEventListener("click", menuDiner)

//-------------------------------------------------------
// -------------------------CAROUSSEL-----------------------
//-----------------EVENT CAROUSSEL----------
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

//-------------GALLERY CAROUSSEL----------------
let galleryCarouselBtn = document.querySelectorAll(".carouselBtnGallery > button");
let galleryCarousel = document.querySelector(".galleryCarousel");
let galleryItems = document.querySelectorAll(".galleryCarouselItem > img");


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

//----------TESTIMONIAL CAROUSSEL-------------
let testimonialCarouselBtn = document.querySelectorAll(".carouselBtn > button");
let carouselItems = document.querySelector(".containerCarousel");

for (let i = 0; i < testimonialCarouselBtn.length; i++) {
    testimonialCarouselBtn[i].addEventListener("click", ()=>{
        carouselItems.style.transform = `translateX(${-(testimonialCarouselBtn[i].value)*25}%)`;
        //btn active color
        document.querySelector(".btnActive").className="";
        testimonialCarouselBtn[i].className="btnActive";
    })
}

