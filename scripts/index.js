let openPopupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
}
openPopupButton.addEventListener('click', togglePopup);


closePopupButton.addEventListener('click', togglePopup);




let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_occupation');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let profileTitle = document.querySelector('.profile__name');
    let profileSubtitle = document.querySelector('.profile__occupation')

    profileTitle.textContent = nameInput.value
    profileSubtitle.textContent = jobInput.value

    togglePopup(event)
}
formElement.addEventListener('submit', formSubmitHandler);