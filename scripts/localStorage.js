function saveDishesInputValueToLocalStorage(basketRefIndex){
  let inputField =  document.getElementById(`basketDishesValue${basketRefIndex}`);
  let inputValue = inputField.value;
  localStorage.setItem(`dishValue${basketRefIndex}`, inputValue);
}
