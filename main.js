let numbersElement = document.getElementById("numbers");
let h3Element = document.createElement("h3");
h3Element.textContent = "5";
let plusButton = document.createElement("button");
plusButton.textContent = "+";
let minusButton = document.createElement("button");
minusButton.textContent = "-";

numbersElement.append(h3Element);
numbersElement.append(plusButton);
numbersElement.append(minusButton);

plusButton.addEventListener("click", () => {
  let currentValue = parseInt(h3Element.textContent);
  h3Element.textContent = currentValue + 1;
});

minusButton.addEventListener("click", () => {
  let currentValue = parseInt(h3Element.textContent);
  h3Element.textContent = currentValue - 1;
});
