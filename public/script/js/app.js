// ------------PARTIE MENU EN JS APPELLE DES FONCTIONS ---------
import {menuDiner,menuBreakfast,menuLunch,menuStarters,lunchClick,startClick,breakClick,dinnerClick} from "./module/menu.js"
lunchClick.addEventListener("click", menuLunch)
startClick.addEventListener("click", menuStarters)
breakClick.addEventListener("click", menuBreakfast)
dinnerClick.addEventListener("click", menuDiner)

//-------------------------------------------------------
// -------------------------CAROUSSEL-----------------------
//-----------------EVENT CAROUSSEL----------
let btnEvents = document.querySelectorAll(".btnEvents > button");
let carouselEvent = document.querySelector(".carouselEvent");

for (let i = 0; i < btnEvents.length; i++) {
    btnEvents[i].addEventListener("click", ()=>{
        carouselEvent.style.transform = `translateX(${-(btnEvents[i].value)*20}%)`
        document.querySelector(".btnActiveEvents").className="";
        btnEvents[i].className="btnActiveEvents";
    })
}



//----------TESTIMONIAL CAROUSSEL-------------
let btnTestiomonial = document.querySelectorAll(".carouselBtn > button");
let testimonialCase = document.querySelector(".testimonialCase");

for (let i = 0; i < btnTestiomonial.length; i++) {
    btnTestiomonial[i].addEventListener("click", ()=>{
        testimonialCase.style.transform = `translateX(${-(btnTestiomonial[i].value)*25}%)`;
        document.querySelector(".btnActive").className="";
        btnTestiomonial[i].className="btnActive";
    })
}

//-------------GALLERY CAROUSSEL----------------
let btnCarousel = document.querySelectorAll(".btnGallery > button");
let carouselGallery = document.querySelector(".carouselGallery");
// carouselGallery.style.transform = `translateX(${50 -(btnCarousel[i].value)*20}%)`

for (let i = 0; i < btnCarousel.length; i++) {

    btnCarousel[i].addEventListener("click", ()=>{

        carouselGallery.style.transform = `translateX(${50 -(btnCarousel[i].value)*20}%)`
        document.querySelector(".btnActiveGallery").className="";
        btnCarousel[i].className="btnActiveGallery";
        document.querySelector(".imgActiveGallery").className="";
        galleryCase[i].className="imgActiveGallery"
    })
}

// carouselGallery.style.marginLeft = "-900px"

// console.log(carouselGallery)
