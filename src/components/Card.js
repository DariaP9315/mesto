export default class Card{

    constructor({name, link, templateSelector, handleCardClick}){
        this.name = name;
        this.link = link;
        this.templateSelector = templateSelector; 
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate(){
        this.cardTemplate = document.querySelector(this.templateSelector);
        const cardElement = this.cardTemplate.content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
      }
    
    _deleteButtonClick = (evt) => {
        evt.target.closest('.element').remove();
      }

    _likeButtonClick = (evt) => {
      this.likeButton.classList.toggle('element__like_active');
    }

    _setEventListeners(){
        this.deleteButton =  this.newCard.querySelector('.element__del');
        this.likeButton =  this.newCard.querySelector('.element__like');
        this.openPopupPhotoButton =  this.newCard.querySelector('.element__photo');

        this.openPopupPhotoButton.addEventListener('click', (evt) =>{
          this._handleCardClick(this.name, this.link);
        });
        
        this.likeButton.addEventListener('click', this._likeButtonClick);

        this.deleteButton.addEventListener('click', this._deleteButtonClick);
    }

    createCard(){
        this.newCard = this._getTemplate();
        
        this._setEventListeners();

        this.newCard.querySelector('.element__title').textContent = this.name;
        this.newCard.querySelector('.element__photo').src = this.link;
        this.newCard.querySelector('.element__photo').alt = `${this.name}`;

        return  this.newCard;
    }

}