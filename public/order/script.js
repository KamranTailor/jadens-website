// Get the query string from the current URL
const queryString = window.location.search;

if (queryString.length === 0) {
  console.log("Query string is empty");
  window.location = '/'
} else {
  console.log("Query string is not empty");
}

// Check if queryString starts with a question mark
let uuid;
if (queryString.startsWith('?')) {
    // Remove the question mark and store the modified query
    uuid = queryString.substring(1);
} else {
    console.log("Query string doesn't start with a question mark");
    uuid = queryString;
}

console.log(uuid)


async function getData() {
    const data = await fetch("/getItemsRouter");
    const dataJson = await data.json();
    console.log(dataJson);

    for (i in dataJson.dataJSON) {
      const r = dataJson.dataJSON[i];
      if (r.uuid == uuid) {
        document.getElementById("name").innerHTML= r.name;
        document.getElementById("description").innerHTML = r.description;
        document.getElementById("price").innerHTML= r.price;
      }
    }
}

// Function to generate a UUID
function generateUUID() {
  // Simplified UUID v4 function
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function saveOrder() {
  // Get the values from the elements
  const name = document.getElementById('name').innerText;
  const description = document.getElementById('description').innerText;
  const price = parseFloat(document.getElementById('price').innerText);
  const amount = parseInt(document.getElementById('amount').value, 10);

  if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
  } else {
      // Retrieve existing orders from localStorage
      let orders = JSON.parse(localStorage.getItem('orders')) || [];

      // Create and add orders based on the 'amount' specified
      for (let i = 0; i < amount; i++) {
          const order = {
              id: generateUUID(), // Add UUID here
              name: name,
              description: description,
              price: price,
              amount: 1 // Adjust this based on your needs
          };

          // Add the new order to the array
          orders.push(order);
      }

      // Save the updated array back to localStorage
      localStorage.setItem('orders', JSON.stringify(orders));

      // Provide feedback to the user
      showModal()
  }
}

// Function to show the modal
function showModal() {
  document.getElementById('customModal').style.display = 'block';
}

// Function to hide the modal and redirect
function setupButtons() {
  document.getElementById('goToCart').addEventListener('click', function() {
      window.location.href = '/cart';
  });

  document.getElementById('goToMenu').addEventListener('click', function() {
      window.location.href = '/menu';
  });
}

// Show the modal when the page loads
window.onload = function() {
  setupButtons();
};

// Optionally, add functionality to close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target === document.getElementById('customModal')) {
      document.getElementById('customModal').style.display = 'none';
  }
};

getData()