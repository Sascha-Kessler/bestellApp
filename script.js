
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
    renderDishes('mainDishes', 'main_dishes_section');
    renderDishes('desserts', 'desserts_section'); 
    renderDishes('drinks', 'drinks_section');    
}

function renderDishes(categoryKey, IdContainer){
    let list = allDishes[categoryKey];
    let container = document.getElementById(IdContainer);
    container.innerHTML= "";
    for (let index = 0; index < list.length; index++) {
        container.innerHTML += getMainDishesTemplate(categoryKey, index)
        
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
    let basketIndex = basket.findIndex(b => b.name === arrayRef[index].name);
        if (basketIndex === -1) {
            basket.push(arrayRef[index]);
            basketIndex = basket.length -1;
                renderBasket(); 
        }   else{
                basket[basketIndex].amount += step; 
                if (basket[basketIndex].amount === 0) {
                    basket[basketIndex].amount = 1;
                    basket.splice(basketIndex, 1);
                        renderBasket();
            }
        }  
        calculatePrice();     
            document.getElementById(`basketDishesValue${basketIndex}`).value= basket[basketIndex].amount;
}

function deleteFromBasket( indexBasket){
    basket.splice(indexBasket, 1);

    renderBasket();
    calculatePrice(); 
}

function calculatePrice(){
    let totalDishesPrice = 0;
    let deliveryFee = 2.50;
    
        for (let index = 0; index < basket.length; index++) {
                totalDishesPrice += basket[index].price * basket[index].amount; 
            } if (totalDishesPrice < 20) {
                 deliveryFee = 2.50;
            } else {
                 deliveryFee = 0;
            }
    let totalPrice = totalDishesPrice + deliveryFee;
        document.getElementById('dishes_price').innerHTML = totalDishesPrice.toFixed(2) + '€';
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