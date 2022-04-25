// const ref = {
//   value: document.querySelector('#value'),
//   decrementButton: document.querySelector('[data-action="decrement"]'),
//   incrementButton: document.querySelector('[data-action="increment"]'),
// };

// ref.decrementButton.addEventListener('click', onDownValue);
// ref.incrementButton.addEventListener('click', onUpValue);

// let counterValue = 0;

// function onDownValue() {
//   counterValue -= 1;
//   console.log(counterValue);
//   ref.value.textContent = counterValue;
//   return counterValue;
// }

// function onUpValue() {
//   counterValue += 1;
//   console.log(counterValue);
//   ref.value.textContent = counterValue;
//   return counterValue;
// }

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  }
}

const addItem = document.querySelector('[data-action="increment"]');
const item = document.querySelector('#value');
const delItem = document.querySelector('[data-action="decrement"]');

addItem.addEventListener('click', function () {
  counter.increment();
  item.textContent = counter.value;
});

delItem.addEventListener('click', function () {
  counter.decrement();
  item.textContent = counter.value;
});






