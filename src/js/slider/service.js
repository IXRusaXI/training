import {elementCollection as collection} from "../collection/collection.js";

export function collectHiddenBrands() {
  const cards = document.querySelectorAll('.card--brand');
  let hidden = [];

  for (const card of cards) {
    if (card.classList.contains('hidden')) {
      hidden.push(card)
    }
  }

  collection.hiddenBrands = hidden

  console.log(collection.hiddenBrands)
}
export function collectHiddenDeviceType() {
  const cards = document.querySelectorAll('.card--device-type');
  let hidden = [];

  for (const card of cards) {
    if (card.classList.contains('hidden')) {
      hidden.push(card)
    }
  }

  collection.hiddenDeviceType = hidden

  console.log(collection.hiddenDeviceType)
}
