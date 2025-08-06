let keys = Object.keys(myDishes);
let dishes = [];
let basket = [];

function init(){
    renderDishes();
}

for (let indexMyDishes = 0; indexMyDishes < keys.length; indexMyDishes++) {
    dishes.push(myDishes[keys[indexMyDishes]]);   
}

function renderDishes(){
    let dishRef = document.getElementById('main_dishes_section');

        for (let dishRefIndex = 0; dishRefIndex < dishes.length; dishRefIndex++) {
            dishRef.innerHTML += getMainDishesTemplate(dishRefIndex);
        }
}

function addDishToBasket(basketAddIndex){
   let basketRef = dishes[basketAddIndex];
    basket.push(basketRef); 
    
    renderBasekt();
}

function deleteDishFromBasket(basketDeleteIndex){
   let basketRemoveRef = basket.splice([basketDeleteIndex],1);
  basketRemoveRef = basket;

  renderBasekt();
}

function renderBasekt(){
    let myBasket = document.getElementById('basket');
    myBasket.innerHTML = "";

       for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
           myBasket.innerHTML += getBasketTemplate(indexBasket);
           
       }
}