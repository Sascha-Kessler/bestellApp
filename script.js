let keys = Object.keys(myDishes);
let dishes = [];

for (let indexMyDishes = 0; indexMyDishes < keys.length; indexMyDishes++) {
    dishes.push(myDishes[keys[indexMyDishes]]);   
}

function renderDishes(){
    let dishRef = document.getElementById('main_dishes_section');

    for (let dishRefIndex = 0; dishRefIndex < dishes.length; dishRefIndex++) {
        dishRef.innerHTML += getMainDishesTemplate(dishRefIndex);
        
    }
}