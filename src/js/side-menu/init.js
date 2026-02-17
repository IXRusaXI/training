import {elementCollection as collection} from "../collection/collection.js";

export function initMenuButton() {
  collection.showMenuButton.addEventListener('click', () => {
    console.log('Нажал бургер', collection.sideMenu.classList.contains('show'))

    if (collection.menuOpenFlag) {
      collection.sideMenu.classList.remove('show')
      collection.sideMenu.classList.remove('z50')
      collection.main.classList.remove('overflow-hidden')

      collection.overlayMenu.classList.add('overlay--hidden')

      collection.menuOpenFlag = false;
    } else {
      collection.sideMenu.classList.add('show')
      collection.sideMenu.classList.add('z50')
      collection.main.classList.add('overflow-hidden')

      collection.overlayMenu.classList.remove('overlay--hidden')

      collection.menuOpenFlag = true;
    }
  })
}
export function closeMenu() {
  collection.overlayMenu.classList.add('overlay--hidden')
  collection.sideMenu.classList.remove('show')
  collection.sideMenu.classList.remove('z50')
  collection.main.classList.remove('overflow-hidden')
  collection.menuOpenFlag = false;
}

export function initCloseMenu() {
  collection.closeButton.addEventListener('click', () => closeMenu())
  collection.overlayMenu.addEventListener('click', () => closeMenu())
}
