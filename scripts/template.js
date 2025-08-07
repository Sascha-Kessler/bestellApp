
function getMainDishesTemplate(dishRefIndex){
    let TemplateDish = dishes[dishRefIndex];
    
    return `
            <table>
                <tr>
                    <th>${TemplateDish.name}</th>
                    <th><button onclick="addDishToBasket(${dishRefIndex})">+</button></th>
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

    return `
            <table>
                <tr>
                    <th>${TemplateBasket.name}</th>
                    <th><button onclick="basketDishValue(${basketRefIndex})">+</button>
                        <input  id="basketDishesValue${basketRefIndex}" type="number" value="1">
                        <button onclick="deleteDishFromBasket(${basketRefIndex})">-</button>   
                    </th>
                </tr>
                <tr>
                    <td>${TemplateBasket.price.toFixed(2)}€</td>
                </tr>
                <tr>
                    <td>${TemplateBasket.description}</td>
               </tr>
           </table>
    `
}