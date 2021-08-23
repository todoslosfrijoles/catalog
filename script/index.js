const cards = [
    {
        "title" : "The Marvel Age of Comics 1961–1978. 40th Ed",
        "text" : "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre.",
        "url" : "./images/image1.jpg",
    },
    {
        "title" : "Walt Disney's Mickey Mouse. The Ultimate History. 40th Ed.",
        "text" : "Celebrate 90+ years of Mickey Mouse with one of the most expansive illustrated publications on the Disney universe: behind-the-scenes shots, rare animation art, and vintage comics trace Mickey’s cartoons, his comic adventures, the world of Mickey merchandise and memorabilia, as well as the legendary Mickey Mouse Club.",
        "url" : "./images/image2.jpg",
    },
    {
        "title" : "The Golden Age of DC Comics",
        "text" : "Get the ultimate insights on the heyday of DC Comics. Spanning from 1935 to 1956, more than 600 pages of covers and interiors, original illustrations, photographs, film stills, and ephemera chart the creators, the stories, and the game-changing super heroes Superman, Batman, and Wonder Woman.",
        "url" : "./images/image3.jpg",
    },
    {
        "title" : "The Little Book of Captain America",
        "text" : "Given an experimental super-serum, Steve Rogers became a super soldier who stands for liberty.",
        "url" : "./images/image4.jpg",
    }
]

const cardContainer = document.querySelector('.section')
for (let i = 0; i < cards.length; i++) {
    titleValueHC = cards[i].title;
    textValueHC = cards[i].text;
    urlValueHC = cards[i].url;
    const cardTemplate = document.querySelector('#card__template_hardcode').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = titleValueHC
    cardElement.querySelector('.card__text').textContent = textValueHC
    cardElement.querySelector('.card__image').setAttribute("src", urlValueHC)
    cardContainer.append(cardElement)
}



let popupBtn = document.querySelector('.add-button');
let popupBtnClose = document.querySelector('.popup__button_close');

function openPopup () {
    document.querySelector(".popup").style.cssText = "display: flex;"
    document.querySelector("body").style.cssText = "overflow: hidden;"
}

function closePopup (popUp) {
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.cssText = "overflow: visible;"
    document.querySelector('.popup__form').reset()
}

popupBtn.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);



function formSubmitHandler(evt) {
    evt.preventDefault();
    closePopup ()
}

function createCard (titleValue, textValue, urlValue) {
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = titleValue
    cardElement.querySelector('.card__text').textContent = textValue
    cardElement.querySelector('.card__image').setAttribute("src", urlValue)
    cardContainer.append(cardElement)
    
    const likeBtn = document.querySelector('.card__button');
    likeBtn.addEventListener('click', function (event) {
        event.target.classList.toggle('card__button_active')
    })

    const trashBtn = document.querySelector('.trash');
    trashBtn.addEventListener('click', function (event) {
        const exB = event.target.parentNode
        const exBB = exB.parentNode
        const exBBB = exBB.parentNode
        exBBB.parentElement.removeChild(exBBB)
    })

    document.querySelector('.popup__form').reset()
}

const formElement= document.querySelector(".popup__content")
formElement.addEventListener('submit', formSubmitHandler)
formElement.addEventListener('submit', function () {
    const title = document.querySelector('.popup__input_name').value
    const text = document.querySelector('.popup__input_text').value
    const url = document.querySelector('.popup__input_url').value

    createCard(title, text, url)
})



let likeBtnHC = document.querySelectorAll('.card__button_hardcode');
likeBtnHC.forEach((element) => {
    element.addEventListener('click', function () {
        let attribute = element.getAttribute('class');
            if (attribute === 'card__button_hardcode') {
                element.classList.add('card__button_hardcode_active');
            } else {
                element.classList.remove('card__button_hardcode_active');
            }
    })
});

const trashBtnHC = document.querySelectorAll('.trash__hardcode');
trashBtnHC.forEach((element) => {
    element.addEventListener('click', function () {
        const exP = element.parentNode
        const exPP = exP.parentNode
        const exPPP = exPP.parentNode
        exPPP.parentElement.removeChild(exPPP)
    })
});



// function cardDataPush () {
//     cardData.push(document.querySelector(".popup__input_text").value);
//     console.log(cardData);
//     return false;
// }

// let trashBtnHC = document.querySelectorAll('.trash_hardcode');

// trashBtnHC.forEach((element) => {
//     element.addEventListener('click', function () {
//         let attribute = element.getAttribute('class');
//             if (attribute === 'card__button_hardcode') {
//                 element.classList.add('card__button_hardcode_active');
//             } else {
//                 element.classList.remove('card__button_hardcode_active');
//             }
//     })
// }); 


// trashBtn.addEventListener('click', function (event) {
//     const sectionElement = document.querySelector('.section')
//     const exP = event.target.parentNode
//     const exPP = exP.parentNode
//     const exPPP = exPP.parentNode
//     console.log(exPPP)
//     exPPP.target.sectionElement.removeChild(exPPP)
// })

// let delPopupBtn = document.querySelector('.trash');
// let delPopupBtnClose = document.querySelector('.trash__close');

// function openDelPopup () {
//     document.querySelector(".trash__popup").style.cssText = "display: flex;"
//     document.querySelector("body").style.cssText = "overflow: hidden;"
// }

// function closeDelPopup (popUp) {
//     document.querySelector(".trash__popup").style.display = "none";
//     document.querySelector("body").style.cssText = "overflow: visible;"
// }

// delPopupBtn.addEventListener('click', openDelPopup);
// delPopupBtnClose.addEventListener('click', closeDelPopup);