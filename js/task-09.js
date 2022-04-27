function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refMain = {
  body: document.body,
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color')
}

const foo = event => {
  const colorRandom = getRandomHexColor();
  refMain.span.textContent = colorRandom;
  refMain.body.style.backgroundColor = colorRandom;
}

refMain.btn.addEventListener('click', foo);
