const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', function () { //toggel hamburger menu
    header.classList.toggle('open')
    overlay.classList.toggle('fade-in')
    overlay.classList.toggle('fade-out')

})
btnHamburger.addEventListener('click', function () { // toggle overlay animation
    overlay.classList.toggle('fade-in')
    overlay.classList.toggle('fade-out')

})