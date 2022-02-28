'use strict'

const setContainer = document.querySelector('.constructor-set__choice')
const constructorOther = document.querySelector('.constructor-set__add')
const footerCheckbox = document.querySelector('.constructor-footer__checkbox')
const outputSum = document.querySelector('.constructor-footer__sum > span')
const fillerChoice = document.querySelector('.constructor-filler__choice')
const fillerColor = document.querySelector('.constructor-filler-view__fillers')
const fillerColorEva = document.querySelector('.constructor-filler-view__fillers_eva')
const patterns = document.querySelector('.constructor-filler-view__patterns')


const appData = {
    fullPrice: 0,
    setPrice: 0,
    otherServices: 0,
    accessories: 0,
    getFullPrice: () => {
        appData.fullPrice = appData.setPrice + appData.otherServices + appData.accessories
        outputSum.textContent = appData.fullPrice
    },
    addFillerPrice: () => {
        fillerChoice.querySelectorAll('input').forEach(item => {
            if (item.checked) {
                if (appData.setPrice === 10000) {
                    appData.setPrice = 13000
                } else if (appData.setPrice === 7000) {
                    appData.setPrice = 8000
                } else if (appData.setPrice === 3000) {
                    appData.setPrice = 4000
                }
            }
        })
    },
    cleanFillerSkinColor: () => {
        document.querySelectorAll('.constructor-filler-view__skin').forEach(item => {
            item.style.display = ''
        })

    },
    setColorStr: (getId) => {
        if (getId.getAttribute('id') === 'skin-color-selector-romb-1') {
            getId.addEventListener('change', (e) => {
                if (e.target.value === '1') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-black')
                        .style.display = 'flex'
                } else if (e.target.value === '2') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-blue')
                        .style.display = 'flex'
                } else if (e.target.value === '3') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-gold')
                        .style.display = 'flex'
                } else if (e.target.value === '4') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-burgundy')
                        .style.display = 'flex'
                } else if (e.target.value === '5') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-gray')
                        .style.display = 'flex'
                } else if (e.target.value === '6') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-brown')
                        .style.display = 'flex'
                } else if (e.target.value === '7') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-sand')
                        .style.display = 'flex'
                } else {
                    appData.cleanFillerSkinColor()
                }
            })
        } else {
            appData.cleanFillerSkinColor()
        }
        if (getId.getAttribute('id') === 'skin-color-selector-romb-2') {
            getId.addEventListener('change', (e) => {
                if (e.target.value === '1') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-black')
                        .style.display = 'flex'
                } else if (e.target.value === '5') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-2-gray')
                        .style.display = 'flex'
                } else if (e.target.value === '6') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-2-brown')
                        .style.display = 'flex'
                } else if (e.target.value === '7') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-sand')
                        .style.display = 'flex'
                } else {
                    appData.cleanFillerSkinColor()
                }
            })
        } else {
            appData.cleanFillerSkinColor()
        }
        if (getId.getAttribute('id') === 'skin-color-selector-romb-3') {
            getId.addEventListener('change', (e) => {
                if (e.target.value === '1') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-3-black')
                        .style.display = 'flex'
                } else if (e.target.value === '2') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-3-blue')
                        .style.display = 'flex'
                } else if (e.target.value === '7') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_romb-1-sand')
                        .style.display = 'flex'
                } else {
                    appData.cleanFillerSkinColor()
                }
            })
        }
        if (getId.getAttribute('id') === 'skin-color-selector-square') {
            getId.addEventListener('change', (e) => {
                if (e.target.value === '1') {
                    appData.cleanFillerSkinColor()
                    document.querySelector('.constructor-filler-view__skin_square-black')
                        .style.display = 'flex'
                } else {
                    appData.cleanFillerSkinColor()
                }
            })
        }
    },
    init: () => {
        setContainer.addEventListener('click', (e) => {
            if (e.target.closest('input')) {
                if (e.target.checked) {
                    appData.setPrice = +e.target.value
                }
            }
            appData.addFillerPrice()
            appData.getFullPrice()
        })
        constructorOther.addEventListener('click', (e) => {
            if (e.target.closest('input')) {
                if (e.target.checked) {
                    appData.otherServices += +e.target.value
                } else {
                    appData.otherServices -= +e.target.value
                }
            }
            appData.getFullPrice()
        })
        footerCheckbox.addEventListener('click', (e) => {
            if (e.target.closest('input')) {
                if (e.target.checked) {
                    appData.accessories += +e.target.value
                } else {
                    appData.accessories -= +e.target.value
                }
            }
            appData.getFullPrice()
        })
        fillerChoice.addEventListener('click', (e) => {
            if (e.target.closest('input')) {
                if (e.target.checked) {
                    appData.addFillerPrice()
                }
                if (e.target.getAttribute('id') === 'eva') {
                    fillerColor.style.display = 'none'
                    fillerColorEva.style.display = 'flex'
                } else {
                    fillerColor.style.display = 'flex'
                    fillerColorEva.style.display = 'none'
                }
            }
            appData.getFullPrice()
        })
        patterns.addEventListener('click', (e) => {
            if (e.target.closest('input')) {
                if (e.target.checked) {
                    document.querySelectorAll('select[name="skin-color-selector"]').forEach(item => {
                        item.style.display = ''
                        item.value = 'Цвета'
                    })
                    const getId = document.getElementById(`${e.target.getAttribute('data-pattern')}`)

                    getId.style.display = 'block'
                    appData.setColorStr(getId)
                }
            }
        })
    },
}

appData.init()