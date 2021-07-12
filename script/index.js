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



const cardData = [
    {
        url: "./images/image1.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image2.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image3.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image1.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        Text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
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


// const temp = document.querySelector(".card__template");
// const inputURL = document.querySelector(".popup__input_url")
// const inputName = document.querySelector(".popup__input_name")
// const inputText = document.querySelector(".popup__input_text")
const formElement= document.querySelector(".popup__content")
const cardSection = document.querySelector(".section");
// const cardURL = document.querySelector(".card__image");
// const cardName = document.querySelector(".card__title");
// const cardText = document.querySelector(".card__text");

function formSubmitHandler (evt) {
    evt.preventDefault();

    var imgValue = document.querySelector(".popup__input_url").value
    var titleValue = document.querySelector(".popup__input_name").value
    var textValue = document.querySelector(".popup__input_text").value
}

formElement.addEventListener('submit', formSubmitHandler)


function createCard () {
    const cardContainer = document.createElement('li')
    cardContainer.classList.add('card')

    const cardImg = document.createElement('img')
    cardImg.classList.add('card__image')

    const cardBlock = document.createElement('div')
    cardBlock.classList.add('card__block')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card__title')

    const cardText = document.createElement('p')
    cardText.classList.add('card__text')

    const cardButton = document.createElement('button')
    cardButton.classList.add('card__button')

    cardContainer.append(cardImg, cardBlock)
    cardBlock.append(cardTitle, cardText, cardButton)
    
    cardContainer.append(cardBlock);
    console.log(cardContainer);
}

createCard()


