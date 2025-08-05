
function getMainDishesTemplate(dishRefIndex){
    let TemplateDish = dishes[dishRefIndex];
    return `
                    <table>
                        <tr>
                            <th>${TemplateDish.name}</th>
                            <th><button>Add</button></th>
                        </tr>
                        <tr>
                            <td>${TemplateDish.price.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>${TemplateDish.description}</td>
                        </tr>
                    </table>
    `
}