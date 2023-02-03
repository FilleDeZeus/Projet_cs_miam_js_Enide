// ------------PARTIE MENU EN JS APPELLE DES FONCTIONS ---------
import {
    menuDiner,
    menuBreakfast,
    menuLunch,
    menuStarters,
    lunchClick,
    startClick,
    breakClick,
    dinnerClick
} from "./module/menu.js"
lunchClick.addEventListener("click", menuLunch)
startClick.addEventListener("click", menuStarters)
breakClick.addEventListener("click", menuBreakfast)
dinnerClick.addEventListener("click", menuDiner)

//-------------------------------------------------------
// -------------------------CAROUSSEL-----------------------

//----------TESTIMONIAL CAROUSSEL-------------
let btnTestiomonial = document.querySelectorAll(".carouselBtn > button");

let testimonialCase = document.querySelector(".testimonialCase");
let currentIndex = 0;
let intervalId = null
for (let i = 0; i < btnTestiomonial.length; i++) {
    btnTestiomonial[i].addEventListener("click", () => {
        currentIndex = i;
        testimonialCase.style.transform = `translateX(${-(btnTestiomonial[i].value)*25}%)`;
        document.querySelector(".btnActive").className = "";
        btnTestiomonial[i].className = "btnActive";
    });
}
function Auto1 () { 
    intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= btnTestiomonial.length) {
    currentIndex = 0;
    }
    testimonialCase.style.transform = `translateX(${-(btnTestiomonial[currentIndex].value)*25}%)`;
    document.querySelector(".btnActive").className = "";
    btnTestiomonial[currentIndex].className = "btnActive";
}, 4000);
}
Auto1()

//-----------------EVENT CAROUSSEL----------
let btnEvents = document.querySelectorAll(".btnEvents > button");
let carouselEvent = document.querySelector(".carouselEvent");

for (let i = 0; i < btnEvents.length; i++) {
    btnEvents[i].addEventListener("click", () => {
        carouselEvent.style.transform = `translateX(${-(btnEvents[i].value)*20}%)`
        document.querySelector(".btnActiveEvents").className = "";
        btnEvents[i].className = "btnActiveEvents";
    })
}
let currentSlide = 0;
let slideInterval = null;
function Auto() {
    slideInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide >= btnEvents.length ) {
            currentSlide = 0;
        }
    carouselEvent.style.transform = `translateX(${-(currentSlide + 1)*20}%)`;
    document.querySelector(".btnActiveEvents").className = "";
    btnEvents[currentSlide + 1].className = "btnActiveEvents";
}, 5000);}
Auto()
//-------------GALLERY CAROUSSEL----------------
let btnCarousel = document.querySelectorAll(".btnGallery > button");
let carouselGallery = document.querySelector(".carouselGallery");
let galleryCase = document.querySelectorAll(".carouselGalleryCase > img");
let currentIndex1 = 0;

let intervalId1 = null;

function troisiemeimage() {
    carouselGallery.style.transform = `translateX(${40 -(2)*20}%)`;
    document.querySelector(".btnActiveGallery").className = "";
    btnCarousel[2].className = "btnActiveGallery";
    document.querySelector(".imgActiveGallery").className = "";
    galleryCase[2].className = "imgActiveGallery";
}

troisiemeimage()

for (let i = 0; i < btnCarousel.length; i++) {

    btnCarousel[i].addEventListener("click", () => {

        carouselGallery.style.transform = `translateX(${40 -(btnCarousel[i].value)*20}%)`
        document.querySelector(".btnActiveGallery").className = "";
        btnCarousel[i].className = "btnActiveGallery";
        document.querySelector(".imgActiveGallery").className = "";
        galleryCase[i].className = "imgActiveGallery"
    })
}

function Auto2() {
    intervalId1 = setInterval(() => {

        currentIndex1++;
        if (currentIndex1 >= btnCarousel.length) {
            currentIndex1 = 0 ;
        }
        carouselGallery.style.transform = `translateX(${40 -(btnCarousel[currentIndex1].value)*20}%)`;
        document.querySelector(".btnActiveGallery").className = "";
        btnCarousel[currentIndex1].className = "btnActiveGallery";
        document.querySelector(".imgActiveGallery").className = "";
        galleryCase[currentIndex1].className = "imgActiveGallery";
    }, 3000);
}
Auto2()
//----DARK MODE-----------

let darkMode = document.getElementById("darkMode");
let body = document.body;

darkMode.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

//----------MODAL----------
let btnbooktable = document.querySelector(".btnbooktable");
let bookingModal = document.getElementById("bookingModal");
let close = document.querySelector(".close");

btnbooktable.addEventListener("click", function () {
    bookingModal.style.display = "block";
});

close.addEventListener("click", function () {
    bookingModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = "none";
    }
});