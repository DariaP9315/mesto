import Popup from './Popup.js';

export default class PopupWithForm extends Popup{

    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    setEventListeners(){
        super.setEventListeners();

        this._popup.querySelector('.popup__form').addEventListener('submit', this._handleSubmitForm);
    }

    _handleSubmitForm = (evt) =>{
        evt.preventDefault();
        this._submitForm(this._getInputValues()) 
    }

    _getInputValues(){
        this.inputList = this._popup.querySelectorAll('.popup__input');
        this.formValues = {};
        this.inputList.forEach(input =>this.formValues[input.name] = input.value);
        return this.formValues;
    }

    closePopup(){
        super.closePopup();
        this._popup.querySelector('.popup__form').reset();
    }

}