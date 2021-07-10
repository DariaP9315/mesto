export default class Card {

  constructor({ name, link, likes, cardId, cardOwner, userId, toggleLike, handleDeleteClick, templateSelector, handleCardClick }) {
    this.name = name;
    this.link = link;
    this.templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._cardId = cardId;
    this._toggleLike = toggleLike;
    this._userId = userId;
    this._owner = cardOwner;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    this.cardTemplate = document.querySelector(this.templateSelector);
    const cardElement = this.cardTemplate.content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  deleteButtonClick = () => {
    this.newCard.remove();
  }

  _likeButtonClick = () => {
    if (this._photoLikeButton.classList.contains('element__like_active')) {
      this._toggleLike(this._cardId, 'DELETE')
    }
    else {
      this._toggleLike(this._cardId, 'PUT')
    }
  }

  updateLikes(likes) {
    this._photoLikeButton.classList.toggle('element__like_active');
    this.newCard.querySelector('.element__counter-like').textContent = likes.length
  }

  _setEventListeners() {
    this._deleteButton = this.newCard.querySelector('.element__del');
    this._photoLikeButton = this.newCard.querySelector('.element__like');
    this.openPopupPhotoButton = this.newCard.querySelector('.element__photo');
    this._markLikes();
    this._checkDeleteAbility();
    this.openPopupPhotoButton.addEventListener('click', () => {
      this._handleCardClick(this.name, this.link);
    });

    this._photoLikeButton.addEventListener('click', this._likeButtonClick);

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });
  }

  _markLikes() {
    const isLiked = this._likes.some(likeOwner => {
      return likeOwner._id === this._userId;
    })

    if (isLiked) {
      this._photoLikeButton.classList.toggle('element__like_active');
    }
  }

  _checkDeleteAbility() {
    if (this._owner._id !== this._userId) {
      this._deleteButton.classList.add('element__del_hidden')
    }
  }

  createCard() {
    this.newCard = this._getTemplate();
    this._setEventListeners();
    this.newCard.querySelector('.element__title').textContent = this.name;
    this.openPopupPhotoButton.src = this.link;
    this.openPopupPhotoButton.alt = `${this.name}`;
    this.newCard.querySelector('.element__counter-like').textContent = this._likes.length;
    return this.newCard;
  }
}