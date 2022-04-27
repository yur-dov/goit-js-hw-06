'use strict'
const sizeRange = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');




const transferSize = (event) => {
    sizeText.style.fontSize = event.currentTarget.value + 'px'
}

sizeRange.addEventListener('input', transferSize);