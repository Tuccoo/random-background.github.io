// Déclaration et attribution des variables :

let button = document.querySelector("button")
let main = document.querySelector("main")
let rdm = Math.random() * 10;
let rdmfloor = Math.floor(rdm)

// Ajout d'un évènement à la variable "button" :

button.addEventListener("click", () => { location.reload() })

// Récupération de l'API puis conversion en json puis changement d'une mince partie du style du main :

fetch(`https://api.unsplash.com//topics/nature/photos?client_id=O1eGM_BTK9LVEolutxDk_zC8KiLGPo7fT61kQ0b1xcE`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        main.style.backgroundImage = `url(${response[rdmfloor].urls.full})`
    })