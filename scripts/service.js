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

export function showSecondBlock() {
    collection.secondBlock.classList.remove('hidden');
    collection.showButton.classList.add('hidden');
    collection.hideButton.classList.remove('hidden');
}

export function hideSecondBlock() {
    collection.secondBlock.classList.add('hidden');
    collection.showButton.classList.remove('hidden');
    collection.hideButton.classList.add('hidden');
}