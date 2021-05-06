const openPopupEditButton = document.querySelector('.profile__edit');
const openPopupAddButton = document.querySelector('.profile__add');

const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupImage = document.querySelector('#popupImage');

const closeEditButton = document.querySelector('#closeEditPopup');
const closeAddButton = document.querySelector('#closeAddPopup');
const closeImagePopup = document.querySelector('#closeImagePopup');

const formElementEdit = document.querySelector('#edit-profile');
const formElementAdd = document.querySelector('#add-card');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_occupation');
const imgInput = document.querySelector('.popup__input_link');
const placenameInput = document.querySelector('.popup__input_placename');

const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__occupation');

const nameElement = document.querySelector('.element__title');

const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');
const cardContainer = document.querySelector('.elements');

const openPopupImageButton = document.querySelector('.element__photo');
const addButton = document.querySelector('#createNewCard');
const editButton = document.querySelector('#saveChanges');

const newCard = cardTemplate.cloneNode(true);

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

initialCards.forEach(function (element) {
    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector('.element__title').textContent = element.name;
    newCard.querySelector('.element__photo').src = element.link; 

    newCard.querySelector('.element__photo').addEventListener('click', function () {
        togglePopupImage(element.link, element.name);
    })

    const deleteCard = newCard.querySelector('.element__del');
    deleteCard.addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    });

    const cardLikeButton = newCard.querySelector('.element__like');
    cardLikeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardContainer.append(newCard)
}); 

function togglePopupEdit() {
    popupEdit.classList.toggle('popup_opened');
    
};

function togglePopupAdd() {
    popupAdd.classList.toggle('popup_opened');
};

function togglePopupImage(link, name) {
    popupImage.classList.toggle('popup_opened');
    
    const imagePopup = document.querySelector('.popup__photo');
    const captionPopup = document.querySelector('.popup__image_title');
    
    imagePopup.src = link;
    imagePopup.alt = `Изображение ` + name;
    captionPopup.textContent = name; 
};

function formSubmitHandler (evt) {
    evt.preventDefault();

    const profileTitle = document.querySelector('.profile__name');
    const profileSubtitle = document.querySelector('.profile__occupation')

    profileTitle.textContent = nameInput.value
    profileSubtitle.textContent = jobInput.value

    togglePopupEdit()
};

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const newElement = createCard(placenameInput.value, imgInput.value);
    formElementAdd.reset()
    cardContainer.prepend(newElement)
    
    togglePopupAdd(evt)
};
addButton.addEventListener('click', handleAddCardFormSubmit)

function createCard(placeValue, linkValue) {

    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector('.element__title').textContent = placeValue;
    newCard.querySelector(".element__photo").src = linkValue;

    newCard.querySelector('.element__photo').addEventListener('click', function () {
        togglePopupImage(linkValue, placeValue);
    })

    const deleteCard = newCard.querySelector('.element__del');
    deleteCard.addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    });

    const cardLikeButton = newCard.querySelector('.element__like');
    cardLikeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardContainer.prepend(newCard);

    return newCard;
}



openPopupEditButton.addEventListener('click', togglePopupEdit);
closeEditButton.addEventListener('click', togglePopupEdit);
openPopupAddButton.addEventListener('click', togglePopupAdd);
closeAddButton.addEventListener('click', togglePopupAdd);
/*openPopupImageButton.addEventListener('click', togglePopupImage);*/
closeImagePopup.addEventListener('click', togglePopupImage);
/*addButton.addEventListener('submit', handleAddCardFormSubmit);*/
/*editButton.addEventListener('submit', formSubmitHandler)*/

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', handleAddCardFormSubmit);

