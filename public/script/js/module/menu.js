// --------CREATION DE LA PARTIE MENU EN JS---------- 
let section5 = document.getElementById('section5');
let container1 = document.querySelector('.navMenu')
let container2 = document.querySelector('.contenuMenu')

let divStarters = document.createElement('div');
divStarters.className = "divStarters";
let navStarters = document.createElement('h4');
navStarters.textContent = "Starters";
divStarters.appendChild(navStarters)

let divBreakfast = document.createElement('div');
divBreakfast.className = "divStarters";
let navBreak = document.createElement('h4');
navBreak.textContent = "Breakfast";
divBreakfast.appendChild(navBreak)

let divLunch = document.createElement('div');
divLunch.className = "divStarters";
let navLunch = document.createElement('h4');
navLunch.textContent = "Lunch";
divLunch.appendChild(navLunch)

let divDinner = document.createElement('div');
divDinner.className = "divStarters";
let navDinner = document.createElement('h4');
navDinner.textContent = "Dinner";
divDinner.appendChild(navDinner)

container1.innerHTML += divStarters.outerHTML;
container1.innerHTML += divBreakfast.outerHTML;
container1.innerHTML += divLunch.outerHTML
container1.innerHTML += divDinner.outerHTML

export let startClick = document.querySelectorAll('.divStarters')[0]
export let breakClick = document.querySelectorAll('.divStarters')[1]
export let lunchClick = document.querySelectorAll('.divStarters')[2]
export let dinnerClick = document.querySelectorAll('.divStarters')[3]

let titreMenu = document.createElement('h5');
titreMenu.className = "titreMenu";
titreMenu.textContent = "Menu";



let titreStarters = document.createElement('h2');
titreStarters.className = "titreStarters";
titreStarters.textContent = "Starters";



let souscontainer= document.createElement("div");
souscontainer.id = "souscontainer";

let ligne1 = document.createElement("div");
ligne1.classList.add("row");

let ligne2 = document.createElement("div");
ligne2.classList.add("row");



//-----Magnam Tiste-----
let image1 = document.createElement("div");
image1.classList.add("image");
image1.innerHTML =  '<img src="./public/img/section5_menu/menu-item-1.png" alt="">';

let magnamTiste = document.createElement("h3")
magnamTiste.classList.add('titre')
magnamTiste.textContent = 'Magnam Tiste'

let magnamDescri = document.createElement("p")
magnamDescri.classList.add('Descri')
magnamDescri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixMagnam = document.createElement('p')
prixMagnam.classList.add('prix')
prixMagnam.textContent = '$5.95'

//--------Eos Luibusdam------
let image2 = document.createElement("div");
image2.classList.add("image");
image2.innerHTML =  '<img src="./public/img/section5_menu/menu-item-4.png" alt="">';

let eosLuibusdam = document.createElement("h3")
eosLuibusdam.classList.add('titre')
eosLuibusdam.textContent = 'Eos Luibusdam' 

let eosDescri = document.createElement("p")
eosDescri.classList.add('Descri')
eosDescri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixEos = document.createElement('p')
prixEos.classList.add('prix')
prixEos.textContent = '$12.95'

//----------Aut Luia--------
let image3 = document.createElement("div");
image3.classList.add("image");
image3.innerHTML = '<img src="./public/img/section5_menu/menu-item-2.png" alt="">';

let autLuia = document.createElement("h3")
autLuia.classList.add('titre')
autLuia.textContent = 'Aut Luia'

let autDescri = document.createElement("p")
autDescri.classList.add('Descri')
autDescri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixAut = document.createElement('p')
prixAut.classList.add('prix')
prixAut.textContent = '$14.95'

//-------Eos Luibusdam 2 
let image4 = document.createElement("div");
image4.classList.add("image");
image4.innerHTML = '<img src="./public/img/section5_menu/menu-item-5.png" alt="">';

let eosLuibusdam2 = document.createElement("h3")
eosLuibusdam2.classList.add('titre')
eosLuibusdam2.textContent = 'Eos Luibusdam'

let eos2Descri = document.createElement("p")
eos2Descri.classList.add('Descri')
eos2Descri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixEos2 = document.createElement('p')
prixEos2.classList.add('prix')
prixEos2.textContent = '$12.95'


//-------Est Eligendi-------

let image5 = document.createElement("div");
image5.classList.add("image");
image5.innerHTML = '<img src="./public/img/section5_menu/menu-item-3.png" alt="">';

let estEligendi = document.createElement("h3")
estEligendi.classList.add('titre')
estEligendi.textContent = 'Est Eligendi'

let estDescri = document.createElement("p")
estDescri.classList.add('Descri')
estDescri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixEst = document.createElement('p')
prixEst.classList.add('prix')
prixEst.textContent = '$8.95'

//-------Laboriosam Direva-------

let image6 = document.createElement("div");
image6.classList.add("image");
image6.innerHTML = '<img src="./public/img/section5_menu/menu-item-6.png" alt="">';

let laboriosamDescri = document.createElement("h3")
laboriosamDescri.classList.add('titre')
laboriosamDescri.textContent = 'Laboriosam Direva'

let laborDescri = document.createElement("p")
laborDescri.classList.add('Descri')
laborDescri.textContent = 'lorem, delen , trataro filede, nerada'

let prixLabo = document.createElement('p')
prixLabo.classList.add('prix')
prixLabo.textContent = '$9.95'


// -------------FONCTION 
export function menuStarters() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters) 
    titreStarters.textContent = "Starters"
    section5.appendChild(souscontainer);
    souscontainer.appendChild(ligne1);
    souscontainer.appendChild(ligne2)
    ligne1.appendChild(image1);
    image1.appendChild(magnamTiste) 
    image1.appendChild(magnamDescri)
    image1.appendChild(prixMagnam)

    ligne1.appendChild(image3);
    image3.appendChild(autLuia)
    image3.appendChild(autDescri)
    image3.appendChild(prixAut)

    ligne1.appendChild(image5);
    image5.appendChild(estEligendi)
    image5.appendChild(estDescri)
    image5.appendChild(prixEst)

    ligne2.appendChild(image2);
    image2.appendChild(eosLuibusdam)
    image2.appendChild(eosDescri)
    image2.appendChild(prixEos)

    ligne2.appendChild(image4);
    image4.appendChild(eosLuibusdam2)
    image4.appendChild(eos2Descri)
    image4.appendChild(prixEos2)

    ligne2.appendChild(image6);
    image6.appendChild(laboriosamDescri)
    image6.appendChild(laborDescri)
    image6.appendChild(prixLabo)
    
}



export function menuBreakfast() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Breakfast"
    section5.appendChild(souscontainer);
    souscontainer.appendChild(ligne1);
    souscontainer.appendChild(ligne2)
    ligne1.appendChild(image1);
    image1.appendChild(magnamTiste) 
    image1.appendChild(magnamDescri)
    image1.appendChild(prixMagnam)

    ligne1.appendChild(image3);
    image3.appendChild(autLuia)
    image3.appendChild(autDescri)
    image3.appendChild(prixAut)

    ligne1.appendChild(image5);
    image5.appendChild(estEligendi)
    image5.appendChild(estDescri)
    image5.appendChild(prixEst)

    ligne2.appendChild(image2);
    image2.appendChild(eosLuibusdam)
    image2.appendChild(eosDescri)
    image2.appendChild(prixEos)

    ligne2.appendChild(image4);
    image4.appendChild(eosLuibusdam2)
    image4.appendChild(eos2Descri)
    image4.appendChild(prixEos2)

    ligne2.appendChild(image6);
    image6.appendChild(laboriosamDescri)
    image6.appendChild(laborDescri)
    image6.appendChild(prixLabo)
    
}


 export function menuLunch() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Lunch"
    section5.appendChild(souscontainer);
    souscontainer.appendChild(ligne1);
    souscontainer.appendChild(ligne2)
    ligne1.appendChild(image1);
    image1.appendChild(magnamTiste) 
    image1.appendChild(magnamDescri)
    image1.appendChild(prixMagnam)

    ligne1.appendChild(image3);
    image3.appendChild(autLuia)
    image3.appendChild(autDescri)
    image3.appendChild(prixAut)

    ligne1.appendChild(image5);
    image5.appendChild(estEligendi)
    image5.appendChild(estDescri)
    image5.appendChild(prixEst)

    ligne2.appendChild(image2);
    image2.appendChild(eosLuibusdam)
    image2.appendChild(eosDescri)
    image2.appendChild(prixEos)


    ligne2.appendChild(image4);
    image4.appendChild(eosLuibusdam2)
    image4.appendChild(eos2Descri)
    image4.appendChild(prixEos2)

    ligne2.appendChild(image6);
    image6.appendChild(laboriosamDescri)
    image6.appendChild(laborDescri)
    image6.appendChild(prixLabo)
    
}


export function menuDiner() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Diner"
    section5.appendChild(souscontainer);
    souscontainer.appendChild(ligne1);
    souscontainer.appendChild(ligne2)
    ligne1.appendChild(image1);
    image1.appendChild(magnamTiste) 
    image1.appendChild(magnamDescri)
    image1.appendChild(prixMagnam)

    ligne1.appendChild(image3);
    image3.appendChild(autLuia)
    image3.appendChild(autDescri)
    image3.appendChild(prixAut)

    ligne1.appendChild(image5);
    image5.appendChild(estEligendi)
    image5.appendChild(estDescri)
    image5.appendChild(prixEst)

    ligne2.appendChild(image2);
    image2.appendChild(eosLuibusdam)
    image2.appendChild(eosDescri)
    image2.appendChild(prixEos)


    ligne2.appendChild(image4);
    image4.appendChild(eosLuibusdam2)
    image4.appendChild(eos2Descri)
    image4.appendChild(prixEos2)

    ligne2.appendChild(image6);
    image6.appendChild(laboriosamDescri)
    image6.appendChild(laborDescri)
    image6.appendChild(prixLabo)
    
}
