// -- JAVASCRIPT CAFE! -- //


//PRODUCTS//
let products = {
whiteCoffee: {
  stock:10,
  price:5
},

blackCoffee: {
stock:10,
price:4
},

hotChocolate: {
stock:10,
price:5
},

muffin: {
stock:10,
price:6
},


gingerBreadMan: {
stock:12,
price:4
},

cookie: {
stock:12,
price:3
}

}

console.log(products)


// ------ this will display product and qty left -----//
function displayProducts(){

      document.getElementById("whiteCoffee").innerHTML ="White Coffee: " +  //document is the html document//
      products.whiteCoffee.stock +" @ $" +products.whiteCoffee.price +" each"
      document.getElementById("whiteCoffee").style.color = products.whiteCoffee.stock <= 0 ? "red" : "black";  //Turnery true or falst//


      document.getElementById("blackCoffee").innerHTML ="Black Coffee: " +
      products.blackCoffee.stock +" @ $" +products.blackCoffee.price + " each"
      document.getElementById("blackCoffee").style.color = products.blackCoffee.stock <= 0 ? "red" : "black";

      document.getElementById("hotChocolate").innerHTML ="Hot Chocolate: " +
      products.hotChocolate.stock +" @ $" +products.hotChocolate.price + " each"
      document.getElementById("hotChocolate").style.color = products.hotChocolate.stock <= 0 ? "red" : "black";

      document.getElementById("muffin").innerHTML ="Blueberry Muffin: " +
      products.muffin.stock +" @ $" +products.muffin.price + " each"
      document.getElementById("muffin").style.color = products.muffin.stock <= 0 ? "red" : "black";

      document.getElementById("gingerBreadMan").innerHTML ="Ginger Bread Man: " +
      products.gingerBreadMan.stock +" @ $" +products.gingerBreadMan.price + " each"
      document.getElementById("gingerBreadMan").style.color = products.gingerBreadMan.stock <= 0 ? "red" : "black";

      document.getElementById("cookie").innerHTML ="Butter Cookie: " +
      products.cookie.stock +" @ $" +products.cookie.price + " each"
      document.getElementById("cookie").style.color = products.cookie.stock <= 0 ? "red" : "black";

    }
displayProducts()



//---CUSTOMERS---//


// Define an object named "customer", it has one property: order, which is an empty array. //
// This array will later hold the list of products the customer wants to buy//

let customer = {
  order:[ ]
}

displayCustomerOrder()

let minOrderSize = 1
let maxOrderSize = 5
// set the order size range. the two variables define the smallest and largest possible order sizes//
// so a customer can order at least 1 product and at most 5 products//

//this starts a function called "generateCustomerOrder"//
// when we call it, it will create a new random order for the customer//

function generateCustomerOrder(){
  // get a random size for the order in a range, 1-5
  // make a new array of the products they're ordering
  // assign the new order to the customer object
  // display the customer order



  //decide how big the order will be//
  let orderSize = getRandomInt(minOrderSize,maxOrderSize) 

  // this array will temporarily hold the names of the products chosen at random, it starts empty//
  let newOrder =[] 
  
  //this will return ("whiteCoffee","blackCoffee","muffin","hotChocolate","gingerBreadMan","cookie")//
  let productNames = Object.keys(products) 
 
  
  
  //this loop repeats until "i" is equal to "orderSize", if orderSize = 2, the loop runs 3 times (0, 1, 2).//
  //product.length is equal 6, productNames.length - 1, equals 5,the maximum looping is 6 (0, 1, 2, 3, 4, 5) //
  for (let i=0; i < orderSize; i++){ 
      let productIndex = getRandomInt(0,productNames.length - 1) 
      let productName = productNames[productIndex]
      newOrder.push(productName)
      // console.log(productName)
  }
  customer.order=newOrder
  displayCustomerOrder()

}

function displayCustomerOrder(){
    document.getElementById("customerOrder").innerHTML = "Customer order: " + 
    customer.order
}


document.getElementById("customerButton").onclick = generateCustomerOrder
// when i click the button, generateCustomerOrder function will be generated//




// ---- Transactions -- //
let cash = 0
function displayCash(){
  document.getElementById("cash").innerHTML="Cash: $"+cash
}
displayCash()



function fillOrder(){
  // make a variable to keep track of our sale total
  // loop through the customer order array
  // if we have their product in stock, sell it to them, and keep track of the sale
  // if we don't have it, alert we're out of this product
  // add the sale total to our Cash
  // clear the custoemr order
  // display everything

  let saleTotal=0
  for(let i=0; i <customer.order.length;i++){

    let productName = customer.order[i]
    
    if (products[productName].stock>0){
        products[productName].stock--   //decrease the qty of stock by 1, subtracting 1//
        saleTotal += products[productName].price //+= means "add this value to the existing variable"//
    } 
    
    else{
      
      showAlert("I'm sorry, we're out of " + productName)
    }

  }
    cash += saleTotal
    customer.order=[]
    displayProducts()
    displayCash()
    displayCustomerOrder()

}
document.getElementById("fillOrder").onclick = fillOrder



function showAlert(message) {
  document.getElementById("alertMessage").textContent = message;
  document.getElementById("alertBox").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("alertBox").classList.add("hidden");
}



//giving a random number between 1 and 5 //
// console.log(getRandomInt(1,5))

// -- UTIL -- //
function getRandomInt(min,max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1))+min;
}