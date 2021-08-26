const initialCards = [
    {
        name: "The Marvel Age of Comics 1961–1978. 40th Ed",
        text: "Welcome to the Marvel Age of Comics, a triumphant era of comic and pop culture innovation which redefined the super hero genre.",
        link: "./images/image1.jpg",
    },
    {
        name: "Walt Disney's Mickey Mouse. The Ultimate History. 40th Ed.",
        text: "Celebrate 90+ years of Mickey Mouse with one of the most expansive illustrated publications on the Disney universe: behind-the-scenes shots, rare animation art, and vintage comics trace Mickey’s cartoons, his comic adventures, the world of Mickey merchandise and memorabilia, as well as the legendary Mickey Mouse Club.",
        link: "./images/image2.jpg",
    },
    {
        name: "The Golden Age of DC Comics",
        text: "Get the ultimate insights on the heyday of DC Comics. Spanning from 1935 to 1956, more than 600 pages of covers and interiors, original illustrations, photographs, film stills, and ephemera chart the creators, the stories, and the game-changing super heroes Superman, Batman, and Wonder Woman.",
        link: "./images/image3.jpg",
    },
    {
        name: "The Little Book of Captain America",
        text: "Given an experimental super-serum, Steve Rogers became a super soldier who stands for liberty.",
        link: "./images/image4.jpg",
    }
];

// Темплейты
const cardTemplate = document.querySelector('#card__template')
    .content.querySelector('.card__item');
   
// Врапперы
const placesWrap = document.querySelector('.cards__list');

// Кнопки и прочие дом узлы
const cardFormModalWindow = document.querySelector('.popup');
const closeCardFormButton = cardFormModalWindow.querySelector('.popup__button_close');
const openCardFormButton = document.querySelector('.add-button');
const imageElement = cardTemplate.querySelector('.card__image');

// Данные форм и элементы форм
const popupForm = cardFormModalWindow.querySelector('.popup__form')
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
const cardTextInput = cardFormModalWindow.querySelector('.popup__input_type_text');

const getCardElement = (data) => {
    const cardElement = cardTemplate.cloneNode(true);
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = `${data.link}`;

    // Нужно исправить: Поиск одного и того же DOM-элемента не должен происходить дважды.
    // Можно лучше: использовать интерполяцию строк из ES6
    cardElement.querySelector('.card__title').textContent = data.name;
    cardElement.querySelector('.card__text').textContent = data.text;

    likeButton.addEventListener('click', handleLikeIcon);
    deleteButton.addEventListener('click', handleDeleteCard);
    cardImage.addEventListener('click', () => handlePreviewPicture(data));
    // До вставки в разметку добавляем слушатели событий.
    return cardElement;
  };

  const toggleModalWindow = (modalWindow) => {
    // Нужно исправить - Функция выполняет только одну задачу
    // Можно лучше - исапользовать для функции для открытия и закрытия: openPopup, closePopup
    modalWindow.classList.toggle('popup_is-opened');
  };

  const handleLikeIcon = (evt) => {
    evt.target.classList.toggle('card__like-button_is-active');
  };

//   const handlePreviewPicture = (data) => {
//     imageElement.src = data.link;
//     imageElement.alt = `Изображение ${data.name}`;
    
//     imageCaption.textContent = data.name;
//     toggleModalWindow(imageModalWindow);
//   };

  const handleDeleteCard = (evt) => {
    evt.target.closest('.card').remove();
  };
  
  const handleCardFormSubmit = (evt) => {
    // Аналогично кнопке выше.
    evt.preventDefault();
    // Можно лучше - не давать добавлять с пустыми полями карточку. (Не js валидация!)
    renderCard({
      name: cardNameInputValue.value,
      text: cardTextInput.value,
      link: cardLinkInputValue.value
    }, placesWrap);
    toggleModalWindow(cardFormModalWindow);
    // Можно лучше - очищать форму после добавления новой карточки
  };
  
  const renderCard = (data, wrap) => {
    // Если в эту функцию вкладывает .forEach, то это не ок
    // Функция renderCard должна переиспользовать при работе с формой сабмита новой карточки.
    wrap.prepend(getCardElement(data));
  };
  
  // EventListeners
  cardFormModalWindow.addEventListener('submit', handleCardFormSubmit);
  
  openCardFormButton.addEventListener('click', () => {
    toggleModalWindow(cardFormModalWindow);
    popupForm.reset();

  });
  
  closeCardFormButton.addEventListener('click', () => {
    toggleModalWindow(cardFormModalWindow);
  });

  // Render
  initialCards.forEach((data) => {
    renderCard(data, placesWrap)
  });