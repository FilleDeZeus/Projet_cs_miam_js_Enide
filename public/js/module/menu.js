let section5 = document.getElementById('section5');
let container1 = document.querySelector('.container.s5')
let container2 = document.querySelector('.container.s5titre')

let divStarters = document.createElement('div');
divStarters.className = "divStarters";
divStarters.textContent = "Starters";

let divBreakfast = document.createElement('div');
divBreakfast.className = "divStarters";
divBreakfast.textContent = "Breakfast";


let divLunch = document.createElement('div');
divLunch.className = "divStarters";
divLunch.textContent = "Lunch";


let divDinner = document.createElement('div');
divDinner.className = "divStarters";
divDinner.textContent = "Dinner";

container1.innerHTML += divStarters.outerHTML;
container1.innerHTML += divBreakfast.outerHTML;
container1.innerHTML += divLunch.outerHTML
container1.innerHTML += divDinner.outerHTML

let divClick1 = document.querySelectorAll('.divStarters')[0]
let divClick2 = document.querySelectorAll('.divStarters')[1]
let divClick3 = document.querySelectorAll('.divStarters')[2]
let divClick4 = document.querySelectorAll('.divStarters')[3]

let titreMenu = document.createElement('h5');
titreMenu.className = "titreMenu";
titreMenu.textContent = "Menu";



let titreStarters = document.createElement('h2');
titreStarters.className = "titreStarters";
titreStarters.textContent = "Starters";



let container = document.createElement("div");
container.id = "containerJS";

let ligne1 = document.createElement("div");
ligne1.classList.add("row");

let ligne2 = document.createElement("div");
ligne2.classList.add("row");

//-----Magnam Tiste-----
let image1 = document.createElement("div");
image1.classList.add("col");
image1.innerHTML =  '<img src="./public/img/section5_menu/menu-item-1.png" alt="">';

let magnamTiste = document.createElement("h3")
magnamTiste.classList.add('p1')
magnamTiste.textContent = 'Magnam Tiste'

let magnamDescri = document.createElement("p")
magnamDescri.classList.add('Descri')
magnamDescri.textContent = 'lorem, delen , trataro, filede, nerada'

let prixMagnam = document.createElement('p')
prixMagnam.classList.add('blue')
prixMagnam.textContent = '$5.95'

//--------Eos Luibusdam------
let image2 = document.createElement("div");
image2.classList.add("col");
image2.innerHTML =  '<img src="./public/img/section5_menu/menu-item-4.png" alt="">';

let eosLuibusdam = document.createElement("h3")
eosLuibusdam.classList.add('p1')
eosLuibusdam.textContent = 'Eos Luibusdam' 

let eosDescri = document.createElement("p")
eosDescri.classList.add('Descri')
eosDescri.textContent = 'lorem, delen , trataro, filede, nerada'


//----------Aut Luia--------
let image3 = document.createElement("div");
image3.classList.add("col");
image3.innerHTML = '<img src="./public/img/section5_menu/menu-item-2.png" alt="">';


let autLuia = document.createElement("h3")
autLuia.classList.add('p1')
autLuia.textContent = 'Aut Luia'

let autDescri = document.createElement("p")
autDescri.classList.add('Descri')
autDescri.textContent = 'lorem, delen , trataro, filede, nerada'

//-------Eos Luibusdam 2 
let image4 = document.createElement("div");
image4.classList.add("col");
image4.innerHTML = '<img src="./public/img/section5_menu/menu-item-5.png" alt="">';

let eosLuibusdam2 = document.createElement("h3")
eosLuibusdam2.classList.add('p1')
eosLuibusdam2.textContent = 'Eos Luibusdam'

let eos2Descri = document.createElement("p")
eos2Descri.classList.add('Descri')
eos2Descri.textContent = 'lorem, delen , trataro, filede, nerada'


//-------Est Eligendi-------

let image5 = document.createElement("div");
image5.classList.add("col");
image5.innerHTML = '<img src="./public/img/section5_menu/menu-item-3.png" alt="">';

let estEligendi = document.createElement("h3")
estEligendi.classList.add('p1')
estEligendi.textContent = 'Est Eligendi'


let estDescri = document.createElement("p")
estDescri.classList.add('Descri')
estDescri.textContent = 'lorem, delen , trataro, filede, nerada'

//-------Laboriosam Direva-------

let image6 = document.createElement("div");
image6.classList.add("col");
image6.innerHTML = '<img src="./public/img/section5_menu/menu-item-6.png" alt="">';

let laboriosamDescri = document.createElement("h3")
laboriosamDescri.classList.add('p1')
laboriosamDescri.textContent = 'Laboriosam Direva'

let laborDescri = document.createElement("p")
laborDescri.classList.add('Descri')
laborDescri.textContent = 'lorem, delen , trataro filede, nerada'




let prixAut = document.createElement('p')
prixAut.classList.add('blue')
prixAut.textContent = '$14.95'

let prixEst = document.createElement('p')
prixEst.classList.add('blue')
prixEst.textContent = '$8.95'

let prixEos = document.createElement('p')
prixEos.classList.add('blue')
prixEos.textContent = '$12.95'

let prixEos2 = document.createElement('p')
prixEos2.classList.add('blue')
prixEos2.textContent = '$12.95'

let prixLabo = document.createElement('p')
prixLabo.classList.add('blue')
prixLabo.textContent = '$9.95'

divClick1.addEventListener("click", menuStarters)
divClick2.addEventListener("click", menuBreakfast)
divClick3.addEventListener("click", menuLunch)
divClick4.addEventListener("click", menuDiner)

function menuStarters() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters) 
    titreStarters.textContent = "Starters"
    section5.appendChild(container);
    container.appendChild(ligne1);
    container.appendChild(ligne2)
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

function menuBreakfast() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Breakfast"
    section5.appendChild(container);
    container.appendChild(ligne1);
    container.appendChild(ligne2)
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

function menuLunch() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Lunch"
    section5.appendChild(container);
    container.appendChild(ligne1);
    container.appendChild(ligne2)
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

function menuDiner() {
    
    container2.appendChild(titreMenu)
    container2.appendChild(titreStarters)
    titreStarters.textContent = "Diner"
    section5.appendChild(container);
    container.appendChild(ligne1);
    container.appendChild(ligne2)
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