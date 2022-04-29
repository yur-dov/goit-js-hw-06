'use strict'
const sizeRange = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

sizeText.style.fontSize = sizeRange.value + 'px';


const transferSize = (event) => {
    sizeText.style.fontSize = event.currentTarget.value + 'px'
}

sizeRange.addEventListener('input', transferSize);