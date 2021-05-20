// Функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const { inputErrorClass,  errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}
  
// Функция скрытия ошибки
const hideInputError = (formElement, inputElement) => {
    const { inputErrorClass,  errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

// Проверка на валидность всех полей формы
const hasInvalidInput = (inputList) => { 
    return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
    });
};

// Проверка на валидность вводимого поля
const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
};


// Функция смена состояния кнопки сохранения изменений
function toggleButtonState(inputList, buttonElement) {
    const { inactiveButtonClass } = config;
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

// Обработчики полей формы
const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ...restConfig } = config;
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, restConfig);
        toggleButtonState(inputList, buttonElement);
      });
    });
};

// Обработчики форм
const enableValidation = (config) => {
    const { formSelector, ...restConfig } = config;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, restConfig);
    });
};
  
