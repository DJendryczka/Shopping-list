

const firebaseConfig = {
  databaseURL: "https://shoppinglist-c9fec-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database(app);

const cartList = database.ref('cartList');

console.log(app);

const addToCartButton = document.getElementById('addButton');
const itemInput = document.getElementById('item');


addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
  let item = itemInput.value;
  cartList.push(item);
  console.log('Adding item:', item);
});