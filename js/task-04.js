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






