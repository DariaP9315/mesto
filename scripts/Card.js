import {openPopup} from '../utils/utils.js';
import {popupImage} from '../utils/constants.js';

export default class Card{

    constructor(name, link, cardSelector) {
        this.name = name;
        this.link = link;
        this.cardSelector = cardSelector;
    }
    
    _getTemplate() {
      // здесь выполним все необходимые операции, чтобы вернуть разметку
      const cardElement = document
        .querySelector(this.cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    
        // вернём DOM-элемент карточки
        return cardElement;
    }
    

    _handleCardDelete = (event) => {
        event.target.closest('.element').remove();
    }

    _handleCardLike = () => {
      this.likeButton.classList.toggle('element__like_active');
    }

    _cardPhoto = () => {
      openPopup(popupImage);
      popupImage.querySelector('.popup__photo').src = this.link;
      popupImage.querySelector('.popup__photo').alt = `Изображение ` + this.name;
      popupImage.querySelector('.popup__caption').textContent = this.name;
    }

    _setEventListeners() {
        this.deleteButton =  this.newCard.querySelector('.element__del');
        this.likeButton =  this.newCard.querySelector('.element__like');
        this.openPopupImageButton =  this.newCard.querySelector('.element__photo');
        this.deleteButton.addEventListener('click', this._handleCardDelete);
        this.likeButton.addEventListener('click', this._handleCardLike);
        this.openPopupImageButton.addEventListener('click', this._cardPhoto);
    }

    createCard() {
        this.newCard = this._getTemplate();
        
        this._setEventListeners();

        this.newCard.querySelector('.element__title').textContent = this.name;
        this.newCard.querySelector('.element__photo').src = this.link;
        this.newCard.querySelector('.element__photo').alt = `Изображение ` + this.name;

        return  this.newCard;
    }

}