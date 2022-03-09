'use strict'

const addToCart = () => {
    const addToCartBtn = document.querySelector('.constructor-footer__button')
    const overlayCart = document.querySelector('.overlay')
    const cart = document.querySelector('.cart')
    const cartBtn = document.querySelector('.header__cart')
    const cartClose = cart.querySelector('.cart__close')
    const cartInfo = cart.querySelector('.cart__wr')


    const createItem = (data) => {
        cartInfo.innerHTML = ''
        data.forEach(item => {
            const createItem = document.createElement('div')
            createItem.classList.add('cart__item')
            createItem.innerHTML = `
                            <div class="cart__img">
                                <img src="./img/rugs/${item.id}.jpg" alt="image">
                            </div>
                            <div class="cart__info">
                                <h3 class="cart__name">
                                    ${item.name}
                                </h3>
                                <span class="cart__color">
                                    Цвет: ${123} строчка: ${123}
                                </span>
                                <span class="cart__id">
                                    id: ${item.id}
                                </span>
                            </div>
                            <div class="cart-counter">
                                <div class="cart-counter__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"> <path d="M14 31H50" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> <path d="M32 62.999C49.1203 62.999 62.999 49.1203 62.999 32C62.999 14.8797 49.1203 1.00098 32 1.00098C14.8797 1.00098 1.00101 14.8797 1.00101 32C1.00101 49.1203 14.8797 62.999 32 62.999Z" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> </svg>
                                </div>
                                <div class="cart-counter__count">
                                    ${item.count}
                                </div>
                                <div class="cart-counter__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"> <path d="M32 50V14" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> <path d="M14 32H50" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> <path d="M32 62.999C49.1203 62.999 62.999 49.1203 62.999 32C62.999 14.8797 49.1203 1.00098 32 1.00098C14.8797 1.00098 1.00101 14.8797 1.00101 32C1.00101 49.1203 14.8797 62.999 32 62.999Z" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> </svg>
                                </div>
                            </div>
                            <div class="cart__price">
                                ${+item.price * +item.count}
                            </div>
                            <button class="cart__del">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"> <path d="M18.947 17.1533L45.045 43.0563" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> <path d="M19.045 43.1527L44.947 17.0557" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> <path d="M32 62.999C49.1203 62.999 62.999 49.1203 62.999 32C62.999 14.8797 49.1203 1.00098 32 1.00098C14.8797 1.00098 1.00101 14.8797 1.00101 32C1.00101 49.1203 14.8797 62.999 32 62.999Z" stroke="#E42E3A" stroke-width="2" stroke-miterlimit="10"/> </svg>
                            </button>
                       `
            cartInfo.append(createItem)
        })
    }

    const addProductToCart = () => {
        let getCart = JSON.parse(localStorage.getItem('cart'))
        console.log(getCart)

        if (getCart) {
            const idProduct = appData.imageNumber

            const clickedGoods = Object.keys(getCart).find(good => good === idProduct)

            if (clickedGoods) {
                console.log(getCart[idProduct]['count'])
                getCart[idProduct]['count'] += 1
            } else {
                getCart[appData.imageNumber] = {
                    count: 1,
                    id: appData.imageNumber,
                    name: appData.numberRugs,
                    price: appData.fullPrice
                    }
            }
        } else {
            getCart = {
                [appData.imageNumber] : {
                    count: 1,
                    id: appData.imageNumber,
                    name: appData.numberRugs,
                    price: appData.fullPrice
                }
            }
            console.log(getCart)
        }

        localStorage.setItem('cart', JSON.stringify(getCart))
        const keys = Object.values(getCart)
        createItem(keys)
    }

    cartBtn.addEventListener('click', () => {
        if (JSON.parse(localStorage.getItem('cart'))) {
            const keys = Object.values(JSON.parse(localStorage.getItem('cart')))
            createItem(keys)
        }
        overlayCart.classList.add('overlay_active')
    })

    cartClose.addEventListener('click', () => {
        overlayCart.classList.remove('overlay_active')
    })

    addToCartBtn.addEventListener('click', () => {
        addProductToCart()
    })
}

addToCart()