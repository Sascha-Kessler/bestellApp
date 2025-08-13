
function getMainDishesTemplate(categoryKey, index){
    let dish = allDishes[categoryKey][index];
    return `
            <table>
                <tr>
                    <th>${dish.name}</th>
                    <th><button class="buttons" onclick="changeDishAmount(1, allDishes['${categoryKey}'], ${index}); calculatePrice(${index})">+</button></th>
                </tr>
                <tr>
                    <td>${dish.price.toFixed(2)}€</td>
                </tr>
                <tr>
                    <td>${dish.description}</td>
               </tr>
           </table>
        `
}


function getBasketTemplate(basketRefIndex){
    let TemplateBasket = basket[basketRefIndex];

   let dishTotal = (TemplateBasket.price * TemplateBasket.amount).toFixed(2) + '€';

    return `
            <table class="basket_table">
                <tr>
                    <th>${TemplateBasket.name}</th>
                </tr>
                <tr>
                    <td>
                        <button class="buttons"  onclick="changeDishAmount(-1, basket, ${basketRefIndex})">-</button> 
                        <input  id="basketDishesValue${basketRefIndex}" type="number" value="${TemplateBasket.amount}" readonly >
                        <button class="buttons"  onclick="changeDishAmount(1, basket, ${basketRefIndex})">+</button>  
                    </td>
                    <td>${dishTotal}</td>
                    <td>
                        <img onclick="deleteFromBasket()" class="trash_button" src="./assets/icons/trash_button.png" alt="trash_button">
                    </td>
                </tr>   
           </table>
    `
}