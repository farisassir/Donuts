
var select = document.getElementById("myDonuts");
var options = ["Chocolate Frosted", "Cinnamon Twis", "Strawberry Frosted"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);}

    
var select = document.getElementById("donutsQty");
var options = [3,5, 8,10];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);}

        
var select = document.getElementById("myDrinks");
var options = ["Café Latte","Cappuccino","Espresso"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);}

let guestName = document.querySelector("#guest");
let myDonuts = document.querySelector("#myDonuts");
let donutsQty= document.querySelector("#donutsQty");
let myDrinks = document.querySelector("#myDrinks");
let coffeSize = document.querySelector("#coffeSize");
let AddDonutButton = document.querySelector("#add-donuts");
let newOrder = document.querySelector("#newOrder");
let orderlist = new OrderList();  

AddDonutButton.onclick = function (evt) {
    evt.preventDefault();

    let donut = new Donut(guestName.value,myDonuts.value,35,donutsQty.value);
    let drink = new Drink(guestName.value,myDrinks.value,15,coffeSize.value);
    let order = new Order(donut,drink);

    orderlist.addOrder(donut,drink,order);

     newOrder.innerHTML = orderlist;
     
}







