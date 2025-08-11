
let basket = [];
let dishesKey = Object.keys(dishes);
let mainDishes = [];
let desserts = [];
let drinks = [];
for (let indexDishes = 0; indexDishes < dishesKey.length; indexDishes++) {
    let category = dishesKey[indexDishes];
         if (category === "mainDishes") {
            mainDishes.push(...dishes[category]);
        }
            if (category === "desserts") {
                desserts.push(...dishes[category]);
            }
                if (category === "drinks") {
                    drinks.push(...dishes[category]);
                }
}

function init(){
    renderDishes();   
}

function renderDishes(){
    let dishRef = document.getElementById('main_dishes_section');
        for (let dishRefIndex = 0; dishRefIndex < mainDishes.length; dishRefIndex++) {
            dishRef.innerHTML += getMainDishesTemplate(dishRefIndex);
        }
            let dessertsRef = document.getElementById('desserts_section');
                for (let dessertsRefIndex = 0; dessertsRefIndex < desserts.length; dessertsRefIndex++) {
                    dessertsRef.innerHTML += getDessertsTemplate(dessertsRefIndex);
                }
                    let drinksRef = document.getElementById('drinks_section');
                        for (let drinksRefIndex = 0; drinksRefIndex < drinks.length; drinksRefIndex++) {
                            drinksRef.innerHTML += getDrinksTemplate(drinksRefIndex);
                }
}

function renderBasket(){
    let myBasket = document.getElementById('basket');
    myBasket.innerHTML = "";
    let myRespBasket = document.getElementById('responsive_basket');
    myRespBasket.innerHTML = "";

       for (let basketRefIndex = 0; basketRefIndex < basket.length; basketRefIndex++) {
           myBasket.innerHTML += getBasketTemplate(basketRefIndex); 
           myRespBasket.innerHTML += getBasketTemplate(basketRefIndex);  
       }
}

function changeDishAmount(step, arrayRef, index){
    let addToBasket = arrayRef[index];
    let basketIndex = basket.findIndex(b => b.name === addToBasket.name);
        if (basketIndex === -1) {
            basket.push(addToBasket);
            basketIndex = basket.length -1;
                renderBasket(); 
        }   else{
                basket[basketIndex].amount += step; 
            }
   document.getElementById(`basketDishesValue${basketIndex}`).value= basket[basketIndex].amount;
}

function deleteFromBasket( indexBasket){
    basket.splice(indexBasket, 1);

    renderBasket();
    calculatePrice(); 
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
    document.getElementById('total_price_responsive').innerHTML = totalPrice.toFixed(2) + '€'; 
}

function showAlertWindow(){
    let alert = document.getElementById('alert');

    if (basket.length > 0) {
        alert.classList.remove('d_none');
            for (let index = 0; index < basket.length; index++) {
                basket[index].amount = 1;
            }
        basket.length = 0;
    }
    renderBasket();
    calculatePrice();
}

function closeAltertWindow(){
    
    let alert = document.getElementById('alert');
    alert.classList.add('d_none');  
}

function toggleResponsiveBasket(){
    let respBasket = document.getElementById('responsive_basket_container');
    respBasket.classList.toggle('d_none'); 
}