// ITERATION 1

function updateSubtotal(product) {

  //DOM Elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let newTotal = (price.innerHTML * quantity.value);
  //document.querySelector('.subtotal span').innerHTML = newTotal  --> "simpler way"
  // and bellow the same thing by creating a new variable
  let newTotalSpan = product.querySelector('.subtotal span');
  //here you change the specific part of the variable to the correct ammount
  newTotalSpan.innerHTML = newTotal;
  return newTotal


  /* alternative solution:
  updateSubtotal.innerText = Number((price.innerHTML)) * Number((quantity.value)); */

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
  const totalProducts = document.querySelectorAll('.product');
  // OR   const totalProducts = document.getElementsByClassName('product');
  let totalPriceSum = 0;
  for (let i = 0; i < totalProducts.length; i++) {
    totalPriceSum += updateSubtotal(totalProducts[i]);
  }
  
  console.log (totalPriceSum)
  let totalPrice = document.querySelector('#total-value span');
  //let totalPrice = document.getElementsByClassName ('#total-value span');
  totalPrice.innerHTML = totalPriceSum;

  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  let rowToRemove = target.parentNode.parentNode;
  let parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type="number');
  //next line add 2 decimals to the right of the number (10.00, for example)
  let fixedPrice = Number(newPrice.value).toFixed(2);
  let newRow = document.createElement('tr');
  newRow.innerHTML = `<td class="name">
    <span>${newProduct.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  newRow.classList.add('product');
  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newRow);

  //making sure the new remove button work~
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  //reseting the fields filled to create the new product
  newProduct.value = '';
  newPrice.value = 0;

}

//bellow is the code we want to run when the page loads (ie. add this functions to the buttons)
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
    // OR removeButtons[i].onClick, removeProduct;    
  }

  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct);


  //... your code goes here
});
