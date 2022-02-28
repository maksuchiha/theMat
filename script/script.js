'use strict'

const setContainer = document.querySelector('.constructor-set__choice')
const constructorOther = document.querySelector('.constructor-set__add')
const footerCheckbox = document.querySelector('.constructor-footer__checkbox')
const outputSum = document.querySelector('.constructor-footer__sum > span')
const fillerChoice = document.querySelector('.constructor-filler__choice')
const fillerColor = document.querySelector('.constructor-filler-view__fillers')
const fillerColorEva = document.querySelector('.constructor-filler-view__fillers_eva')


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
    },
}

appData.init()