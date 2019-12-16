class Drink extends ShopItem{

    drinkTotal(){

        if (this.quantity =="Larg"){ return 3*this.price
        }
        else if(this.quantity=="Medium"){
            return 2*this.price
        }
        else if (this.quantity == "Small") {
            return 1*this.price
        } 
       else {
           return 0*this.price
       }
    }

     toString() {
      return `
      <li>Drink: ${this.name}, Cost: ${this.price}, Size: ${this.quantity}
      <br>Total: ${this.drinkTotal()}</li> `;}
}


    





 
    





 




