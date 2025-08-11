
function getMainDishesTemplate(dishRefIndex){
    
    let TemplateDish = mainDishes[dishRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button class="buttons" onclick="changeDishAmount(1, mainDishes, ${dishRefIndex}); calculatePrice(${dishRefIndex})">+</button></th>
                </tr>
                <tr>
                    <td>${TemplateDish.price.toFixed(2)}€</td>
                </tr>
                <tr>
                    <td>${TemplateDish.description}</td>
               </tr>
           </table>
        `
}

function getDessertsTemplate(dessertsRefIndex){
    let TemplateDish = desserts[dessertsRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button class="buttons"  onclick="changeDishAmount(1, desserts, ${dessertsRefIndex}); calculatePrice(${dessertsRefIndex})">+</button></th>
                </tr>
                <tr>
                    <td>${TemplateDish.price.toFixed(2)}€</td>
                </tr>
                <tr>
                    <td>${TemplateDish.description}</td>
               </tr>
           </table>
        `
}

function getDrinksTemplate(drinksRefIndex){
    let TemplateDish = drinks[drinksRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button class="buttons" onclick="changeDishAmount(1, drinks, ${drinksRefIndex}); calculatePrice(${drinksRefIndex})">+</button></th>
                </tr>
                <tr>
                    <td>${TemplateDish.price.toFixed(2)}€</td>
                </tr>
                <tr>
                    <td>${TemplateDish.description}</td>
               </tr>
           </table>
        `
}

function getBasketTemplate(basketRefIndex){
    let TemplateBasket = basket[basketRefIndex];
    //let dishID = TemplateBasket.name.replace(/\s+/g, '_');

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