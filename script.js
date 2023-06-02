// TROCA DOS CARDS

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active')
})


// BOTAO LOGIN

const btnPopup= document.querySelector('.btnLogin')

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup')
})

// FECHAR O CARD

const iconClose = document.querySelector('.icon-close')

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup')
})