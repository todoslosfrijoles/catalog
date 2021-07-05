let likeBtn = document.querySelectorAll('.card__button');

likeBtn.forEach((element) => {
    element.addEventListener('click', function () {
        let attribute = element.getAttribute('class');
            if (attribute === 'card__button') {
                element.classList.add('card__button_active');
            } else {
                element.classList.remove('card__button_active');
            }});
}); 

let popupBtn = document.querySelector('.add-button');
let popUp = document.querySelector(".popup");
let popupBtnClose = document.querySelector('.popup__button_close');

function openPopup () {
    document.querySelector(".popup").style.display = "flex"
    document.querySelector("body").style.cssText = "overflow: hidden;"
}

function closePopup () {
    document.querySelector(".popup").style.display = "none"
    document.querySelector("body").style.cssText = "overflow: visible;"
}

popupBtn.addEventListener('click', openPopup);

popupBtnClose.addEventListener('click', closePopup)
