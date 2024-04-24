const boxesContainer = document.getElementById('boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

const createBoxes = amount => {
  let boxesHTML = '';
  let size = 30;

  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createButton.addEventListener('click', () => {
  const amount = parseInt(inputNumber.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);