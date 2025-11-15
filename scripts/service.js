import {elementCollection as collection} from "./collection.js";

let createElement = (htmlString) => {
    let template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template;
};

export function getElement(htmlString) {
    let element = createElement(htmlString);
    return document.importNode(element.content, true);
}

export function showSecondBlock(hidden) {
    if (!hidden) {
        for (let hiddenLink of collection.hiddenLinksList) {
            hiddenLink.classList.add('hidden');
        }

        collection.showButton.textContent = 'Показать все';

        collection.dropDown.classList.remove('drop-down-area--open')
        collection.hidden = true
    } else {
        for (let hiddenLink of collection.hiddenLinksList) {
            hiddenLink.classList.remove('hidden');
        }

        collection.showButton.textContent = 'Скрыть';

        collection.dropDown.classList.add('drop-down-area--open')
        collection.hidden = false;
    }
}