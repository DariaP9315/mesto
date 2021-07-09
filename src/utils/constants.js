export const initialCards = [
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

// Конфиг валидации
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

// Находим кнопки
export const popupAddButton = document.querySelector('.profile__add');
export const popupEditButton = document.querySelector('.profile__edit');
export const popupEditAvatarButton = document.querySelector('.profile__avatar-edit');

// Попап редактирования аватара
export const popupEditAvatar = document.querySelector('#popupAvEdit');
export const closeEditAvatarButton = document.querySelector('#closeAvEditPopup');
export const formElementEditAvatar = document.querySelector('#edit_av');

// Попап редактирования профиля
export const popupEdit = document.querySelector('#popupEdit');
export const closeEditButton = document.querySelector('#closeEditPopup');
export const formElementEdit = document.querySelector('#edit-profile');
export const nameInput = document.querySelector('#name');
export const jobInput = document.querySelector('#occupation');
export const profileTitle = document.querySelector('.profile__name');
export const profileSubtitle = document.querySelector('.profile__occupation');

// Попап добавления карточки
export const closeAddButton = document.querySelector('#closeAddPopup');
export const popupAdd = document.querySelector('#popupAdd');
export const formElementAdd = document.querySelector('#add-card');

// Попап увеличения фото
export const closeImagePopup = document.querySelector('#closeImagePopup');
export const imgInput = document.querySelector('#link');
export const placenameInput = document.querySelector('#placename');
export const popupImage = document.querySelector('#popupImage');

// Попап удаления карточки
export const popupDelete = document.querySelector('#popupDelete');
export const closeDeletePopup = document.querySelector('#closeDeletePopup');
export const formElementDelete = document.querySelector('#delete_card');

// Контейнер фото
export const cardsContainer = document.querySelector('.elements');

export const popup = document.querySelector('.popup');