let likeBtn = document.querySelectorAll('.card__button');

likeBtn.forEach((element) => {
    element.addEventListener('click', function () {
        let attribute = element.getAttribute('class');
            if (attribute === 'card__button') {
                element.classList.add('card__button_active');
            } else {
                element.classList.remove('card__button_active');
            }
    })
}); 

let popupBtn = document.querySelector('.add-button');
let popupBtnClose = document.querySelector('.popup__button_close');

function openPopup () {
    document.querySelector(".popup").style.cssText = "display: flex;"
    document.querySelector("body").style.cssText = "overflow: hidden;"
}

function closePopup (popUp) {
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.cssText = "overflow: visible;"
}

popupBtn.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);

const cardSection = document.querySelector('.section');

const cardData = [
    {
        url: "./images/image1.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image2.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image3.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image1.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre."
    }
]

// function createCard () {
//     cardSection.insertAdjacentHTML('afterbegin', `
//     <li class="card">
//         <img class="card__image" src="${cardData[i].url}" alt="${cardData[i].name}">
//         <div class="card__block">
//             <h2 class="card__title">${cardData[i].name}</h2>
//             <p class="card__text">${cardData[i].Text}</p>
//             <button class="card__button"></button>
//         </div>
//     </li>
// `);
// }

// for (i = 0; cardData.length > i; i++) {
//     createCard(cardData);
//     console.log(i)
// };


const temp = document.querySelector(".card__template");
const inputURL = document.querySelector(".popup__input_url");
const inputName = document.querySelector(".popup__input_name");
const inputText = document.querySelector(".popup__input_text");

const cardURL = document.querySelector(".card__image");
const cardName = document.querySelector(".card__title");
const cardText = document.querySelector(".card__text");

function formSubmitHandler (evt) {
    evt.preventDefault();
    console.log(inputName.value)

    // cardName.textContent = inputName.value;
    // cardText.textContent = inputText.value;
}


