'use strict'

const addToCart = () => {
    const addToCart = document.querySelector('.constructor-footer__button')
    const overlayCart = document.querySelector('.overlay')
    const cart = document.querySelector('.cart')
    const imageCart = cart.querySelector('.cart__img > img')
    const cartBtn = document.querySelector('.header__cart')
    const cartClose = cart.querySelector('.cart__close')

    cartBtn.addEventListener('click', (e) => {
        overlayCart.classList.add('overlay_active')
    })

    cartClose.addEventListener('click', (e) => {
        overlayCart.classList.remove('overlay_active')
    })

    addToCart.addEventListener('click', () => {
        imageCart.setAttribute('src', `./img/rugs/${appData.imageNumber}.jpg`)
    })


}

addToCart()