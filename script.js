let keys = Object.keys(myDishes);
let dishes = [];
let basket = [];
let basketDishesAmount = [];

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

function renderBasekt(){
    let myBasket = document.getElementById('basket');
    myBasket.innerHTML = "";

       for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
           myBasket.innerHTML += getBasketTemplate(indexBasket);  
       }
}

function addDishToBasket(basketAddIndex){
   let basketRef = dishes[basketAddIndex];
    basket.push(basketRef); 
    
    renderBasekt();
}

function DecreaseBasketDishValue(dishID, indexBasket){
    let dishValue = document.getElementById(`basketDishesValue${dishID}`);
    dishValue.value -- ;

    if (dishValue.value < 1) {
        basket.splice(indexBasket, 1);
    } else {
        if (basket[indexBasket]) {
            basket[indexBasket].amount = Number(dishValue.value);
            }      
    }    
    renderBasekt();
    calculatePrice();  
}

function IncreaseBasketDishValue(dishID, indexBasket){
    let dishValue = document.getElementById(`basketDishesValue${dishID}`);
    
    dishValue.value ++; 
    
    if (basket[indexBasket]) {
        basket[indexBasket].amount = Number(dishValue.value);
    } 
}

function calculatePrice(){
    let dishesTotal = 0;
    let deliveryFee;
    
    for (let index = 0; index < basket.length; index++) {
        let dish = basket[index];
        let amount = dish.amount || 1;
        dishesTotal += dish.price*amount; 
    } if (dishesTotal < 20) {
        deliveryFee = 5;
    } else {
        deliveryFee = 0;
    }

    let totalPrice = dishesTotal + deliveryFee;

    document.getElementById('dishes_price').innerHTML = dishesTotal.toFixed(2) + '€';
    document.getElementById('delivery_costs').innerHTML = deliveryFee.toFixed(2) + '€';
    document.getElementById('total_price').innerHTML = totalPrice.toFixed(2) + '€';  
}

