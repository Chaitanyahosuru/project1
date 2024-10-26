


// Function to get menu from JSON
function getMenu() {
  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      const menuContainer = document.getElementById('menu-container');
      data.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
        `;
        menuContainer.appendChild(menuItem);
      });
    })
    .catch(error => console.error('Error fetching menu:', error));
}

// Function to take order
function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const order = {};
      const burgers = [
        { name: 'Burger 1', price: 10 },
        { name: 'Burger 2', price: 15 },
        { name: 'Burger 3', price: 12 },
      ];
      order.items = burgers;
      order.total = burgers.reduce((acc, curr) => acc + curr.price, 0);
      resolve(order);
    }, 2500);
  });
}

// Function to prepare order
function orderPrep(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = { order_status: true, paid: false };
      resolve(orderStatus);
    }, 1500);
  });
}

// Function to pay order
function payOrder(orderStatus) {
  return new Promise(resolve => {
    setTimeout(() => {
      orderStatus.paid = true;
      resolve(orderStatus);
    }, 1000);
  });
}

// Function to display thank you message
function thankyouFnc(orderStatus) {
  if (orderStatus.paid) {
    alert('Thank you for eating with us today!');
  }
}

// Main function to handle promise chaining
async function main() {
  getMenu();

  const order = await takeOrder();
  console.log('Order:', order);

  const orderStatus = await orderPrep(order);
  console.log('Order Status:', orderStatus);

  const updatedOrderStatus = await payOrder(orderStatus);
  console.log('Updated Order Status:', updatedOrderStatus);

  thankyouFnc(updatedOrderStatus);
}



