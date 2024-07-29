
function updateCart() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log(orders);

    if (orders.length === 0) { 
        alert("No Orders Found");
        window.location = '/menu';
    } else {

        let toDisplay = "";
        for (i in orders) {
            const r = orders[i];
            toDisplay += `
            <div class="cart-item">
                <button class="remove-button" onclick="removeItem('${r.id}')">X</button>
                <h2>${r.name}</h2>
                <p class="description">${r.description}</p>
                <p class="price">£${r.price}</p>
            </div>`
        }

        document.getElementById("cart-container").innerHTML= toDisplay;
    }

}

function removeItem(id) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    
    const index = orders.findIndex(order => order.id === id);
    
    if (index !== -1) {
        orders.splice(index, 1);
    }
    
    localStorage.setItem('orders', JSON.stringify(orders));
    updateCart();
}

async function order() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const orderNotes = document.getElementById("order-notes").value;
    const orders = JSON.parse(localStorage.getItem('orders'));

    const response = await fetch('/setOrdersRouter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, email: email, orderNotes: orderNotes, order: orders })
    });
    const data = await response.json();
    console.log(data)

    localStorage.removeItem('orders');
    alert("Thank you for ordering");
    window.location = '/menu'
}


updateCart()
