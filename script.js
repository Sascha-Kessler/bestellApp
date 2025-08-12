
let basket = [];
let dishesKey = Object.keys(dishes);
let allDishes = {
    'mainDishes':[],
    'desserts':[],
    'drinks':[]
}

for (let indexDishes = 0; indexDishes < dishesKey.length; indexDishes++) {
    let category = dishesKey[indexDishes];
    allDishes[category].push(...dishes[category]);
}

function init(){
    renderDishes(allDishes.mainDishes);
    renderDishes(allDishes.desserts); 
    renderDishes(allDishes.drinks);    
}

function renderDishes(category){
        for (let categoryIndex = 0; categoryIndex < category.length; categoryIndex++) {
            if (allDishes.mainDishes === category) {
                let dishRef = document.getElementById('main_dishes_section');
                dishRef.innerHTML += getMainDishesTemplate(categoryIndex);  
        }
        if (allDishes.desserts === category) {
            let dessertsRef = document.getElementById('desserts_section');
            dessertsRef.innerHTML += getDessertsTemplate(categoryIndex);
        }
        if (allDishes.drinks === category) {
            let drinksRef = document.getElementById('drinks_section');
            drinksRef.innerHTML += getDrinksTemplate(categoryIndex);
        }
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
                if (basket[basketIndex].amount === 0) {
                    basket[basketIndex].amount = 1;
                    basket.splice(basketIndex, 1);
                        renderBasket();
            }
            calculatePrice();
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