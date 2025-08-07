function saveDishesInputValueToLocalStorage(dishID){
  let inputField =  document.getElementById(`basketDishesValue${dishID}`);
  let inputValue = inputField.value;
  localStorage.setItem(`dishValue${dishID}`, inputValue);
}
