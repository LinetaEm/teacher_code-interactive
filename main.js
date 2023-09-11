let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let minusBtn = document.createElement('button')
let plusBtn = document.createElement('button')

numberDisplay.textContent = 5
minusBtn.textContent = '-'
plusBtn.textContent = '+'

numbersWrapper.append(numberDisplay, minusBtn, plusBtn)

function changeColor() {
  if (parseInt(numberDisplay.textContent) >= 5) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}

changeColor();

minusBtn.addEventListener('click', function() {
  numberDisplay.textContent = parseInt(numberDisplay.textContent) - 1;

  if (parseInt(numberDisplay.textContent) <= 1) {
    minusBtn.setAttribute('disabled', true);
  }

  if (parseInt(numberDisplay.textContent) < 10) {
    plusBtn.removeAttribute('disabled');
  }

  changeColor();
});

plusBtn.addEventListener('click', function() {
  numberDisplay.textContent = parseInt(numberDisplay.textContent) + 1;

  if (parseInt(numberDisplay.textContent) >= 10) {
    plusBtn.setAttribute('disabled', true);
  }

  if (parseInt(numberDisplay.textContent) > 1) {
    minusBtn.removeAttribute('disabled');
  }

  changeColor();
});

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', function() {
  numberDisplay.textContent = 5;
  minusBtn.removeAttribute('disabled');
  plusBtn.removeAttribute('disabled');
  changeColor();
});

numbersWrapper.append(resetBtn);
