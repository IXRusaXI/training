import {elementCollection as collection} from "../collection/collection.js";

export function initReadMoreDescriptionButton() {
  collection.readMoreDescriptionButton.addEventListener('click', () => {
    console.log('Нажал', collection.description)
    console.log('Проверяю', collection.description.classList.contains('company-info__description--small'))
    let title = collection.readMoreDescriptionButton.querySelector('.button-drop-down__text')
    let arrow = collection.readMoreDescriptionButton.querySelector('.icon--drop-down')


    if (collection.description.classList.contains('company-info__description--small')) {
      collection.description.classList.remove('company-info__description--small')
      collection.description.classList.add('company-info__description--open')
      title.innerText = 'Скрыть'
      arrow.classList.add('icon--rotate')
    } else {
      collection.description.classList.remove('company-info__description--open')
      collection.description.classList.add('company-info__description--small')
      title.innerText = 'Читать далее'
      arrow.classList.remove('icon--rotate')
    }
  })
}
export function initShowAllBrandButton() {
  const button = collection.showAllBrandsButton

  button.addEventListener('click', () => {
    let title = button.querySelector('.button-drop-down__text')
    let arrow = button.querySelector('.icon--drop-down')

    if (collection.hiddenBrandsFlag) {

      for (const hiddenBrand of collection.hiddenBrands) {
        hiddenBrand.classList.remove('hidden')
      }

      title.innerText = 'Скрыть'
      arrow.classList.add('icon--rotate')
      collection.hiddenBrandsFlag = false
    } else {
      for (const hiddenBrand of collection.hiddenBrands) {
        hiddenBrand.classList.add('hidden')
      }

      title.innerText = 'Показать все'
      arrow.classList.remove('icon--rotate')

      collection.hiddenBrandsFlag = true
    }
  })
}
export function initShowAllDeviceTypeButton() {
  const button = collection.showAllDeviceTypeButton

  button.addEventListener('click', () => {
    let title = button.querySelector('.button-drop-down__text')
    let arrow = button.querySelector('.icon--drop-down')

    if (collection.hiddenDeviceTypeFlag) {

      for (const hiddenBrand of collection.hiddenDeviceType) {
        hiddenBrand.classList.remove('hidden')
      }

      title.innerText = 'Скрыть'
      arrow.classList.add('icon--rotate')
      collection.hiddenDeviceTypeFlag = false
    } else {
      for (const hiddenBrand of collection.hiddenDeviceType) {
        hiddenBrand.classList.add('hidden')
      }

      title.innerText = 'Показать все'
      arrow.classList.remove('icon--rotate')

      collection.hiddenDeviceTypeFlag = true
    }
  })
}
