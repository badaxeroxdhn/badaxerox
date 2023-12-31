const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeBtn = document.querySelector('.modal__close-btn');
const discountBtn = document.querySelector('.modal__button');
// ---- ---- cookies ---- ---- //
const createCookie = () => {
  let maxAge = ';max-age=10';
  let path = ';path=/';
  document.cookie = 'modalpopup=displayed' + maxAge + path;
};

// ---- ---- add active and cookie ---- ---- //
const displayModal = () => {
  if (document.cookie.indexOf('modalpopup') == -1) {
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    createCookie();
  }
};

setTimeout(() => {
  displayModal();
}, 3000);

// ---- ---- remove active ---- ---- //
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
});
discountBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
});