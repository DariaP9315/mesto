const closePopupByEsc = evt => {
  if(evt.key === 'Escape') {
    const visiblePopup = document.querySelector('.popup_opened');
    closePopup(visiblePopup);
  }
}

const closeByOverlay = evt => {
    const popup = document.querySelector('.popup_opened');
    if(evt.target.classList.contains('popup'))
    {
      closePopup(popup); 
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('mousedown', closeByOverlay);
  }

function closePopup(item) {
    document.removeEventListener('keydown', closePopupByEsc);
    item.removeEventListener('mousedown', closeByOverlay);
    item.classList.remove('popup_opened');
  }

export {openPopup, closePopup} 