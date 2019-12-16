class Donut extends ShopItem {

  donutTotal(){
    
      return this.price*this.quantity;
  }

  toString() {
    return `
      
      <a>Hi ${this.guest}</a><br>
      <a>Your order as below:</a><br>
      <li>Donut: ${this.name}, Cost: ${this.price}, Quantity: ${this.quantity}
      <br>Total: ${this.donutTotal()}</li>`;
      }
}