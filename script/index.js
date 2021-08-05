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
        text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image2.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image3.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    },
    {
        url: "./images/image4.jpg",
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        text: "Welcome to the Marvel Age of Comics, a triumphantera of comic and pop culture innovation which redefined the super hero genre."
    }
]

function createCard () {
    let imgValue = document.querySelector(".popup__input_url").value
    const cardContainer = document.createElement('li')
    cardContainer.classList.add('card')

    const cardImg = document.createElement('img')
    cardImg.classList.add('card__image')
    cardImg.setAttribute('src', imgValue);
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
    
    const cardSection = document.querySelector(".section")

    cardContainer.append(cardBlock);
    cardSection.append(cardContainer);
    console.log(cardContainer);
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    createCard()
    let imgContainer = document.querySelector('.card__image')
    console.log(imgContainer, 'lol');
    let titleValue = document.querySelector(".popup__input_name").value
    let textValue = document.querySelector(".popup__input_text").value
    console.log(titleValue)
    imgContainer.setAttribute = ("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png');
    document.querySelector('.card__title').textContent = titleValue;
    document.querySelector('.card__text').textContent = textValue;
    closePopup ()
}

let titleValue = document.querySelector(".popup__input_name").value
let textValue = document.querySelector(".popup__input_text").value
let imgValue = document.querySelector(".popup__input_url").value

let dataCard = {
    url: imgValue,
    name: titleValue,
    text: textValue
}

cardData.push(dataCard)

const formElement= document.querySelector(".popup__content")
formElement.addEventListener('submit', formSubmitHandler)

console.log(cardData)







