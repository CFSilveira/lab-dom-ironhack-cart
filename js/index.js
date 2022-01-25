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
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
