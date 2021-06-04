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
      this._newCard.remove();
      this._element = null;
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
        this.deleteButton =  this._newCard.querySelector('.element__del');
        this.likeButton =  this._newCard.querySelector('.element__like');
        this.openPopupImageButton =  this._newCard.querySelector('.element__photo');
        this.deleteButton.addEventListener('click', this._handleCardDelete);
        this.likeButton.addEventListener('click', this._handleCardLike);
        this.openPopupImageButton.addEventListener('click', this._cardPhoto);
    }

    createCard() {
        this._newCard = this._getTemplate();
        
        this._setEventListeners();
        this._image = this._newCard.querySelector('.element__photo');
        this._caption = this._newCard.querySelector('.element__title');
        

        this._caption.textContent = this.name;
        this._image.src = this.link;
        this._image.alt = `Изображение ` + this.name;

        return  this._newCard;
    }

}