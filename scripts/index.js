//инициация массива данных "из коробки"
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//получаем шаблон с разметкой для одной карточки и контейнер для элементов
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');
const cardsContainer = document.querySelector('.elements');

//переменные для попап редактирования профиля
const popupEdit = document.querySelector('#popupEdit');
const popupEditButton = document.querySelector('.profile__edit');
const closeEditButton = document.querySelector('#closeEditPopup');
const formElementEdit = document.querySelector('#edit-profile');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#occupation');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__occupation');

//переменные для попап создания и добавления карточки
const popupAddButton = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popupAdd');
const closeAddButton = document.querySelector('#closeAddPopup');
const formElementAdd = document.querySelector('#add-card');
const imgInput = document.querySelector('#link');
const placenameInput = document.querySelector('#placename');

//переменные для попап просмотра фотографий
const popupImage = document.querySelector('#popupImage');
const closeImagePopup = document.querySelector('#closeImagePopup');
const imagePopup = document.querySelector('.popup__photo');
const captionPopup = document.querySelector('.popup__caption');

//запуск валидации
const config = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__save', 
  inactiveButtonClass: 'popup__save_inactive', 
  inputErrorClass: 'popup__input_type_error', 
  errorClass: 'popup__input-error_active' 
} 

const inputList = Array.from(popupAdd.querySelectorAll('.popup__input'));
const popupAddSubmit = popupAdd.querySelector('.popup__save');

//функция создания карточки
function createCard(place, link) {
  const newCard = cardTemplate.cloneNode(true);

  const cardPhoto = newCard.querySelector('.element__photo');
  newCard.querySelector('.element__title').textContent = place;
  newCard.querySelector('.element__photo').src = link;
  newCard.querySelector('.element__photo').alt = place;

  const deleteCard = newCard.querySelector('.element__del');
  deleteCard.addEventListener('click', handleCardDelete);

  const cardLikeButton = newCard.querySelector('.element__like');
  cardLikeButton.addEventListener('click', handleCardLike);

  const captionPopup = document.querySelector('.popup__caption');
  
  cardPhoto.addEventListener('click', function() {
    imagePopup.src = link;
    imagePopup.alt = `Изображение ` + place;
    captionPopup.textContent = place;
    openPopup(popupImage);
  });

  return newCard;
}

//функция открытия popup
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

//функция закрытия popup
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

//функция закрытия попап по клику на эскейп
function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    const visiblePopup = document.querySelector('.popup_opened');
    closePopup(visiblePopup);
  }
}

//функция закрытия попап по клику на оверлей
const closePopupOverlay = event => {
  if (event.target !== event.currentTarget)
        return;
    closePopup(event.target);
  
}

//функция открытия окна редактирования профиля
function handleEditPopupOpen() {
  openPopup(popupEdit);
  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = jobInput.value
}

//функция закрытия окна редактирования профиля
function handleEditPopupClose() {
  closePopup(popupEdit);
}

//функция отправки формы редактирования профиля
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  

  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = jobInput.value
  closePopup(popupEdit);
}

//функция открытия окна добавления карточки
function handleAddPopupOpen() {
  //очищаем форму перед открытием
  formElementAdd.reset()
  openPopup(popupAdd);
}

//функция закрытия окна добавления карточки
function handleAddPopupClose() {
  closePopup(popupAdd);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newElement = createCard(placenameInput.value, imgInput.value);
  formElementAdd.reset()
  cardsContainer.prepend(newElement)
  
  closePopup(popupAdd)
};

//функция лайка на карточку
function handleCardLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

//функция удаления карточки
function handleCardDelete(evt) {
  evt.target.closest('.element').remove();
}

//функция закрытия окна просмотра фото
function handlePopupImageClose() {
  closePopup(popupImage);
}

//отображаем карточки из массива
initialCards.forEach(element => {
  const newCard = createCard(element.name, element.link);
  cardsContainer.append(newCard); 
});

//кнопка редактирования профиля
popupEditButton.addEventListener('click', handleEditPopupOpen);

//кнопка закрытия попап редактирования профиля
closeEditButton.addEventListener('click', handleEditPopupClose);

//кнопка отправки формы редактирования профиля
formElementEdit.addEventListener('submit', handleEditFormSubmit);

//кнопка закрытия попап добавления карточки
closeAddButton.addEventListener('click', handleAddPopupClose);

//кнопка отправки формы попап добавления карточки
formElementAdd.addEventListener('submit', handleAddFormSubmit);

//кнопка закрытия попап просмотра фото
closeImagePopup.addEventListener('click', handlePopupImageClose);

popupEdit.addEventListener('mousedown', closePopupOverlay);
popupAdd.addEventListener('mousedown', closePopupOverlay);
popupImage.addEventListener('mousedown', closePopupOverlay);

popupAddButton.addEventListener('click', () => {
  placenameInput.value = ''; 
  imgInput.value = '';
  toggleButtonState(inputList, popupAddSubmit);
  openPopup(popupAdd); 
});

enableValidation(config);