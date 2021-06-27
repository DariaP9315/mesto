import './index.css';
import Card from '../components/Card.js'; 
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'; 
import PopupWithForm  from '../components/PopupWithForm.js'; 
import PopupWithImage from '../components/PopupWithImage.js'; 
import UserInfo from '../components/UserInfo.js';

import {initialCards,
        config,
        popupAddButton,
        popupEditButton,
        formElementEdit,
        formElementAdd,
        nameInput,
        jobInput
} from '../utils/constants.js';


function createCard(cardName, cardLink){
  const card = new Card({
    name:cardName, 
    link:cardLink, 
    templateSelector:'#element-template', 
    handleCardClick:(link, src) => {
      popupPhoto.openPopup(link, src)
    }
  });
  const cardElement = card.createCard();
  return cardElement;
}

const cardList = new Section ({
  items:initialCards,
  renderer:(card) => {
    cardList.addItem(createCard(card.name, card.link));
  }},
    '.elements'
);

cardList.renderItems();

const popupPhoto = new PopupWithImage('#popupImage');
popupPhoto.setEventListeners();

const popupAdd = new PopupWithForm({
  popupSelector:'#popupAdd', 
  submitForm:({placename, link}) => {
      cardList.addItem(createCard(placename, link));
      popupAdd.closePopup();
    }
  }
);
popupAdd.setEventListeners();

popupAddButton.addEventListener('click', function () {
  formAddValidator.deleteInputError();
  popupAdd.openPopup();
});

const userInfo = new UserInfo('.profile__name','.profile__occupation');

const popupEdit = new PopupWithForm({
  popupSelector:'#popupEdit', 
  submitForm: ({username, occupation}) => {
      userInfo.setUserInfo(username,occupation)
      popupEdit.closePopup();
    }
  }
);
popupEdit.setEventListeners();

popupEditButton.addEventListener('click', function () {
  const [userName, userOccupation] = userInfo.getUserInfo();
  nameInput.value = userName;
  jobInput.value = userOccupation;
  formEditValidator.deleteInputError();
  popupEdit.openPopup();
});

const formEditValidator = new FormValidator(config, formElementEdit);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(config, formElementAdd);
formAddValidator.enableValidation();