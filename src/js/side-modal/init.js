import {elementCollection as collection} from "../collection/collection.js";

export function initFeedBackModal() {
  collection.main.addEventListener('click', (evt) => {
    const btn = evt.target.closest('.icon--call')

    console.log("Нажал")

    if (!btn) return;
    console.log("Прошел дальше")
    collection.feedBackModal.classList.toggle('hidden')
    collection.feedBackOverlay.classList.toggle('overlay--hidden')
    // collection.overlayModal.classList.toggle('overlay--modal')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })

  collection.feedBackOverlay.addEventListener('click', () => {
    collection.feedBackModal.classList.toggle('hidden')
    collection.feedBackOverlay.classList.toggle('overlay--hidden')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })
  collection.feedBackCloseButton.addEventListener('click', () => {
    collection.feedBackModal.classList.toggle('hidden')
    collection.feedBackOverlay.classList.toggle('overlay--hidden')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })
}

export function initOrderCallModal() {
  collection.main.addEventListener('click', (evt) => {
    const btn = evt.target.closest('.icon--chat')

    console.log("Нажал")

    if (!btn) return;
    console.log("Прошел дальше")
    collection.callBackModal.classList.toggle('hidden')
    collection.callBackOverlay.classList.toggle('overlay--hidden')
    // collection.overlayModal.classList.toggle('overlay--modal')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })

  collection.callBackOverlay.addEventListener('click', () => {
    collection.callBackModal.classList.toggle('hidden')
    collection.callBackOverlay.classList.toggle('overlay--hidden')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })
  collection.callBackCloseButton.addEventListener('click', () => {
    collection.callBackModal.classList.toggle('hidden')
    collection.callBackOverlay.classList.toggle('overlay--hidden')
    if (!collection.menuOpenFlag) {
      collection.main.classList.toggle('overflow-hidden')
    }
  })
}
