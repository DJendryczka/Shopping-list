

const firebaseConfig = {
  databaseURL: "https://shoppinglist-c9fec-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase and reference to the database
const database = firebase.database(app);
const cartList = database.ref('cartList');

const addToCartButton = document.getElementById('addButton');
const itemInput = document.getElementById('item');
const shoppingList = document.querySelector('.shopping-list');

// Function to create and append list item with click-to-remove feature
function createListItem(key, item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    // Add click event to remove the item
    listItem.addEventListener('click', () => {
        removeItem(key); // Pass the Firebase key of the item
    });

    shoppingList.appendChild(listItem); // Append the li to the ul
}

// Fetch existing items from Firebase and display them
cartList.on('value', (snapshot) => {
    // Clear the current list
    shoppingList.innerHTML = '';

    // Check if there are items in the database
    if (snapshot.exists()) {
        // Get the data from the snapshot
        const items = snapshot.val();
        // Loop through the items and append each one to the list
        for (const key in items) {
            const item = items[key];
            createListItem(key, item); // Create and append list item
        }
    } else {
        console.log('No items found in the cart list');
    }
});

// Add new items to Firebase
addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
    let item = itemInput.value;

    if (item) { // Ensure the input is not empty
        // Push the new item to the database
        cartList.push(item);

        // Clear the input field after adding the item
        itemInput.value = '';

        console.log('Adding item:', item);
    } else {
        console.log('Item input is empty');
    }
});

// Function to remove the item from Firebase and the UI
function removeItem(key) {
    // Remove the item from Firebase using the key
    cartList.child(key).remove().then(() => {
        console.log(`Item with key ${key} removed successfully`);
    }).catch((error) => {
        console.error('Error removing item:', error);
    });
}

