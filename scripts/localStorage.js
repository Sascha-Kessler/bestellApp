function saveDishesInputValueToLocalStorage(dishID){
  let inputField =  document.getElementById(`basketDishesValue${dishID}`);
  let inputValue = inputField.value;
  localStorage.setItem(`dishValue${dishID}`, inputValue);
}

function getDishesInputValueFromLocalStorage(dishID){
  let inputAmount = localStorage.getItem(`basketDishesValue${dishID}`);
}