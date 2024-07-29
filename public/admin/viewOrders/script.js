async function getData() {
    const data = await fetch("/getOrdersRouter");
    const dataJson = await data.json();
    console.log(dataJson);

    const orders = dataJson.dataJSON;

    let toDisplay = "";
        for (i in orders) {
            const r = orders[i];

            let items = "";
            let totalPrice = 0;
            for (i in r.order) {
                items += `<p>${r.order[i].name} - £${r.order[i].price}</p>`;
                totalPrice = totalPrice + r.order[i].price;
            }
            toDisplay += `
            <div class="cart-item">
                <button class="remove-button" onclick="removeItem('${r.id}')">X</button>
                <h2>${r.name}</h2>
                <p class="price">Total: £${totalPrice}</p>
                <p class="description">${r.email}</p>
                <br>
                <b> Items: </b>
                ${items}
            </div>`
        }

    document.getElementById("cart-container").innerHTML= toDisplay;
}

async function removeItem() {
    
}


getData()