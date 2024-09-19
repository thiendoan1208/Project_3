const loginBtns = document.querySelectorAll('.js-login-btn')
const confirm = document.querySelector(".modal__overlay")
const modalOff = document.querySelector('.login__modal--off')

function showLogin() {
  confirm.classList.add('modal__overlay-open') 
}

function offLogin() {
 confirm.classList.remove('modal__overlay-open')
}

for (const loginBtn of loginBtns ) {
    loginBtn.addEventListener('click', showLogin)
}

 modalOff.addEventListener('click', offLogin)
