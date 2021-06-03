import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {openPopup, closePopup} from '../utils/utils.js';
import {initialCards, popupEditButton, popupAddButton, popupAdd, popupEdit, popupImage, closeAddButton,closeEditButton, closeImagePopup, config, formElementEdit,formElementAdd, nameInput, jobInput, placenameInput, imgInput, cardsContainer, profileTitle, profileSubtitle} from '../utils/constants.js'

// Подгружаем первые карточки
initialCards.forEach((element) => {
  addCard(element.name, element.link);
})

function addCard(name, link) {
  const card = new Card(name, link, '#element-template');
  const cardElement = card.createCard();
  cardsContainer.prepend(cardElement);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  addCard(placenameInput.value, imgInput.value);
  closePopup(popupAdd);
}

popupEditButton.addEventListener('click', function (event) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  formEditValidator.deleteInputError();
  openPopup(popupEdit);
});

popupAddButton.addEventListener('click', function (event) {
  formElementAdd.reset();
  formAddValidator.deleteInputError();
  openPopup(popupAdd);
});

closeAddButton.addEventListener('click', function (event) {
  closePopup(popupAdd);
});


closeEditButton.addEventListener('click', function (event) {
  closePopup(popupEdit);
});


closeImagePopup.addEventListener('click', function (event) {
    closePopup(popupImage);
});

formElementEdit.addEventListener('submit', handleEditFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);

const formEditValidator = new FormValidator(config, formElementEdit);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(config, formElementAdd);
formAddValidator.enableValidation();
