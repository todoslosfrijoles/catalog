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



const cardContainer = document.querySelector('.section')

function createCard (titleValue, textValue) {
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = titleValue
    cardElement.querySelector('.card__text').textContent = textValue

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
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    // cardDataPush ()
    closePopup ()
}

// let titleValue = document.querySelector(".popup__input_name").value
// let textValue = document.querySelector(".popup__input_text").value
// let imgValue = document.querySelector(".popup__input_url").value

// function cardDataPush () {
//     cardData.push(document.querySelector(".popup__input_text").value);
//     console.log(cardData);
//     return false;
// }

const formElement= document.querySelector(".popup__content")
formElement.addEventListener('submit', formSubmitHandler)
formElement.addEventListener('submit', function () {
    const title = document.querySelector('.popup__input_name').value
    const text = document.querySelector('.popup__input_text').value
    createCard(title, text)

})


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


const trashBtnHC = document.querySelectorAll('.trash__hardcode');
trashBtnHC.forEach((element) => {
    element.addEventListener('click', function () {
        // const sectionElement = document.querySelector('.section')
        const exP = element.parentNode
        const exPP = exP.parentNode
        const exPPP = exPP.parentNode
        exPPP.parentElement.removeChild(exPPP)
    })
})




// to fully remove an element from the dom structure, use trashelement.parentElement.removeChild(trashelement);
// in this case, possibly use the (event) to highlight what is to be deleted?
