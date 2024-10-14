

const firebaseConfig = {
  databaseURL: "https://shoppinglist-c9fec-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database(app);

const cartList = database.ref('cartList');


const addToCartButton = document.getElementById('addButton');
const itemInput = document.getElementById('item');
const shoppingList = document.querySelector('.shopping-list');


addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
  let item = itemInput.value;
  cartList.push(item);
  const listItem = document.createElement('li');
  listItem.textContent = item; // Set the text of the li to the item

  // Append the li to the ul
  shoppingList.appendChild(listItem);

  // Clear the input field after adding the item
  itemInput.value = '';
  console.log('Adding item:', item);
});