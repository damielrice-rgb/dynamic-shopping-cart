const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

const productCart = [];
 
let totalPrice = 0;

addProductButton.addEventListener("click", () => {
  const product = productNameInput.value;
  const price = parseFloat(productPriceInput.value);

  if(product === "" || price === "") {
     alert("Please Enter a Value");
    return;
  }

  const productObj = {
    name: product,
    price: price, 
  };

  productCart.push(productObj);
  updateTotalPrice(price);
  displayProduct();
  console.log(productCart);
// clear inputs
  productNameInput.value = "";
  productPriceInput.value = "";

});



function displayProduct() {
  cart.innerHTML = "";

  for (let i = 0; i < productCart.length; i++){
    const currentProduct = productCart[i];
    const li = document.createElement('li');
    li.dataset.price = currentProduct.price;
    li.dataset.index = i;
    const btn = document.createElement('button');
    

    btn.textContent = "Remove";
    btn.addEventListener("click", removeItem);

      /*() => {
      product.Cart.splice(i, 1);
      updateTotalPrice(-currentProduct.price);
      displayProduct();
    });
    */
    
    li.textContent = `Name: ${currentProduct.name}, Price: $${currentProduct.price}` ;

    li.appendChild(btn);
    cart.appendChild(li);
    
  }
}

  

 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  const index = Number(item.dataset.index)
  productCart.splice(index, 1);
  updateTotalPrice(-price);
  displayProduct();
}