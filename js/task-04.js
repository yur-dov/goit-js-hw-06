const ref = {
  value: document.querySelector('#value'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
};

ref.decrementButton.addEventListener('click', onDownValue);
ref.incrementButton.addEventListener('click', onUpValue);

let counterValue = 0;

function onDownValue() {
  counterValue -= 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}

function onUpValue() {
  counterValue += 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}