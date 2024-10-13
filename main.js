const addToCartButton = document.getElementById('addButton');
const itemInput = document.getElementById('item');


addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
  let item = itemInput.value;
  console.log('Adding item:', item);
});