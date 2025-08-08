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

function DecreaseBasketDishValue(dishID){
    let dishValue = document.getElementById(`basketDishesValue${dishID}`);
    dishValue.value -- ;

    if (dishValue.value < 1) {
        for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
            let currentDishID = basket[indexBasket].name.replace(/\s+/g, '_');

            if (currentDishID === dishID){
                basket.splice(indexBasket, 1);
            } 
        }
        renderBasekt();   
    }      
}

function IncreaseBasketDishValue(dishID, ){
    let dishValue = document.getElementById(`basketDishesValue${dishID}`);
    
    dishValue.value ++;   
    basketDishesAmount[dishID] ++;
    document.getElementById(`basketDishesValue${dishID}`).value = basketDishesAmount[dishID];
   
    console.log(basketDishesAmount);
    
}

function calculatePrice(){
    let priceDishes = document.getElementById('dishes_price');
    let myPriceDishes = [];
        priceDishes.innerHTML = "";
        for (let indexDishesBasket = 0; indexDishesBasket < basket.length; indexDishesBasket++) {
             myPriceDishes.push(basket[indexDishesBasket].price)     
        }

    let dishesPriceAdd = 0;

        for (let indexDishesSum = 0; indexDishesSum < myPriceDishes.length; indexDishesSum++) {
            dishesPriceAdd += myPriceDishes[indexDishesSum];
        }

    priceDishes.innerHTML = dishesPriceAdd.toFixed(2) + '€';

    let deliveryCosts = document.getElementById('delivery_costs');
    let myDeliverCosts = 5;
    deliveryCosts.innerHTML = myDeliverCosts.toFixed(2) + '€';

}

console.log(basket)