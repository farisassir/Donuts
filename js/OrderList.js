class OrderList {
  
    orders = [];
  
addOrder (donut,drink,total){
    this.orders.push(donut,drink,total);
} 
toString() {
    return `
 
      <ul>${this.orders.join('')}</ul>
    `;
  }
}
