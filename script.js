const form = document.querySelector(".card-form");
const formSection = document.querySelector(".form-section");
const completeState = document.querySelector(".complete-state");
const continueBtn = document.querySelector(".continue-btn");

const cardholderInput = document.querySelector(".cardholder-input");

cardholderInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

const cardnumberInput = document.querySelector(".cardnumber-input");

cardnumberInput.addEventListener("input", () => {
  cardnumberError.textContent = "";
});
const monthInput = document.querySelector(".month-input");

monthInput.addEventListener("input",() => {
  monthError.textContent = "";
});
const yearInput = document.querySelector(".year-input");

yearInput.addEventListener("input",() => {
  yearError.textContent = "";
});
const cvcInput = document.querySelector(".cvc-input");

cvcInput.addEventListener("input",() => {
  cvcError.textContent = "";
});
const errorMessage = document.querySelector(".error-message");

const cardnumberError = document.querySelector(".cardnumber-error");

const monthError = document.querySelector(".month-error");

const yearError = document.querySelector(".year-error");

const cvcError = document.querySelector(".cvc-error");

form.addEventListener("submit",(event) => {
  event.preventDefault();
  if (cardholderInput.value === "") {
   errorMessage.textContent = "Please enter your name";
  }
  if (cardnumberInput.value === "") {
    cardnumberError.textContent = "please enter your card number";
  }
  
  if (cardnumberInput.value.length !== "" && cardnumberInput.value.length !== 16) {
  console.log("Wrong card number");
  
}

if (cardnumberInput.value !=="" && !/^\d+$/.test(cardnumberInput.value)) {
  console.log("Only numbers");
  return;
}

  if (monthInput.value === "") {
    monthError.textContent = "Required";
  }
  
  if (monthInput.value.length !== 2) {
  console.log("Only months");
  
}

  if (Number(monthInput.value) < 1 || Number(monthInput.value) > 12) {
    console.log("wrong month");
    
  }
  
  if (!/^\d+$/.test(monthInput.value)) {
    console.log("Only months");
  }
  
  if (yearInput.value === "") {
    yearError.textContent = "Required";
    
  }
  
  if (yearInput.value.length !== 2) {
  console.log("Wrong year");
  
}

if (!/^\d+$/.test(yearInput.value)) {
  console.log("Only years");
  
}

  if (cvcInput.value === "") {
    cvcError.textContent = "Required";
    return;
  }
  
  if (cvcInput.value.length !== 3) {
  console.log("wrong cvc");
  return;
}

if (!/^\d+$/.test(cvcInput.value)) {
  console.log("Only numbers");
  return;
}
  
  formSection.style.display = "none";
completeState.style.display = "block";
});



continueBtn.addEventListener("click",() => {
  completeState.style.display = "none";
  formSection.style.display = "block";
  form.reset();
});