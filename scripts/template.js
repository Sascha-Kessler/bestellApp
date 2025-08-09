
function getMainDishesTemplate(dishRefIndex){
    let TemplateDish = allDishes.mainDishes[dishRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button onclick="addDishToBasket(${dishRefIndex}); calculatePrice(${dishRefIndex})">+</button></th>
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
    let TemplateDish = allDishes.desserts[dessertsRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button onclick="addDishToBasket(${dessertsRefIndex}); calculatePrice(${dessertsRefIndex})">+</button></th>
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
    let TemplateDish = allDishes.drinks[drinksRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button onclick="addDishToBasket(${drinksRefIndex}); calculatePrice(${drinksRefIndex})">+</button></th>
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
    let dishID = TemplateBasket.name.replace(/\s+/g, '_');

    let dishTotal = (TemplateBasket.price * TemplateBasket.amount).toFixed(2) + '€';

    return `
            <table class="basket_table">
                <tr>
                    <th>${TemplateBasket.name}</th>
                </tr>
                <tr>
                    <td>
                        <button onclick="DecreaseBasketDishValue('${dishID}', ${basketRefIndex}); saveDishesInputValueToLocalStorage('${dishID}')">-</button> 
                        <input  id="basketDishesValue${dishID}" type="number" value="${TemplateBasket.amount}" readonly >
                        <button onclick="IncreaseBasketDishValue('${dishID}', ${basketRefIndex}); saveDishesInputValueToLocalStorage('${dishID}'); calculatePrice(${basketRefIndex})">+</button>  
                    </td>
                    <td>${dishTotal}</td>
                    <td>
                        <img onclick="deleteFromBasket('${dishID}, ${basketRefIndex}')" class="trash_button" src="./assets/icons/trash_button.png" alt="trash_button">
                    </td>
                </tr>   
           </table>
    `
}