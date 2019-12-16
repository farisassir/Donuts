class Order{ 
constructor(donut = new Donut(), drink = new Drink()){
    this.donut = donut;
    this.drink = drink;
}
    totalPrice(){

    var x = this.donut.donutTotal();
    var y = this.drink.drinkTotal();
    return  x+y

    }

    toString() {
        
        return `
        <li>Total to Pay:${this.totalPrice()}<br>
        <a>* If you would like to have diffrent type of Donuts talk to the cashier!</a></li><br> `;
    
    }
      
 }



