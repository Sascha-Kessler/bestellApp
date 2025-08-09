
let basket = [];
let dishesKey = Object.keys(dishes);
let mainDishes = [];
let desserts = [];
let drinks = [];

for (let indexDishes = 0; indexDishes < dishesKey.length; indexDishes++) {
    let category = dishesKey[indexDishes];

    if (category === "mainDishes") {
        mainDishes.push(...dishes[category]);           // durch ... wird jedes Gericht einzeln übernommen(spread methode), würde man dishes anstatt ... nehmen würd alles in das neue Array gepushed aber als ganzen sprich mainDishes.lenght wär 1;
    }
    if (category === "desserts") {
        desserts.push(...dishes[category]);
    }
    if (category === "drinks") {
        drinks.push(...dishes[category]);
    }
}

function init(){
    renderMainDishes();
    renderDesserts();
    renderDrinks();
}


function renderMainDishes(){
    let dishRef = document.getElementById('main_dishes_section');

        for (let dishRefIndex = 0; dishRefIndex < mainDishes.length; dishRefIndex++) {
            dishRef.innerHTML += getMainDishesTemplate(dishRefIndex);
        }
}

function renderDesserts(){
    let dessertsRef = document.getElementById('desserts_section');

        for (let dessertsRefIndex = 0; dessertsRefIndex < desserts.length; dessertsRefIndex++) {
            dessertsRef.innerHTML += getDessertsTemplate(dessertsRefIndex);
        }
}

function renderDrinks(){
    let drinksRef = document.getElementById('drinks_section');

        for (let drinksRefIndex = 0; drinksRefIndex < drinks.length; drinksRefIndex++) {
            drinksRef.innerHTML += getDrinksTemplate(drinksRefIndex);
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
   let basketRef = mainDishes[basketAddIndex];
    basket.push(basketRef); 
    
    renderBasekt();
}

function addDessertToBasket(basketAddIndex){
   let basketRef = desserts[basketAddIndex];
    basket.push(basketRef); 
    
    renderBasekt();
}

function addDrinkToBasket(basketAddIndex){
   let basketRef = drinks[basketAddIndex];
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

function deleteFromBasket( indexBasket){
    basket.splice(indexBasket, 1);
    renderBasekt();
    calculatePrice(); 
}

function IncreaseBasketDishValue(dishID, indexBasket){
    let dishValue = document.getElementById(`basketDishesValue${dishID}`);
    
    dishValue.value ++; 
    
    if (basket[indexBasket]) {
        basket[indexBasket].amount = Number(dishValue.value);
    } 
    renderBasekt();
}

function calculatePrice(){
    let dishesTotal = 0;
    let deliveryFee = 2.50;
    
    for (let index = 0; index < basket.length; index++) {
        let dish = basket[index];
        let amount = dish.amount || 1;
        dishesTotal += dish.price*amount; 
    } if (dishesTotal < 20) {
        deliveryFee = 2.50;
    } else {
        deliveryFee = 0;
    }

    let totalPrice = dishesTotal + deliveryFee;

    document.getElementById('dishes_price').innerHTML = dishesTotal.toFixed(2) + '€';
    document.getElementById('delivery_costs').innerHTML = deliveryFee.toFixed(2) + '€';
    document.getElementById('total_price').innerHTML = totalPrice.toFixed(2) + '€';  
}

function showAlertWindow(){
    
    let alert = document.getElementById('alert');
    alert.classList.remove('d_none');
    basket.length = 0;
    renderBasekt();
    calculatePrice();
}

