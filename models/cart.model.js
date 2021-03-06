class Cart {
  constructor(items = [], totalQuantity = 0, totalPrice = 0) { 
    this.items = items;
    this.totalQuantity = totalQuantity;
    this.totalPrice = totalPrice;
  }

  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price
    };

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.product.id === product.id) {
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.totalPrice = cartItem.totalPrice + product.price;
        this.items[i] = cartItem;

        // this.totalQuantity = this.totalQuantity + 1; --- Can be written as below
        this.totalQuantity++;
        // this.totalPrice = this.totalPrice + product.price; --- Can be written as below
        this.totalPrice += product.price
        // console.log(
        //   'var:this.totalQuantity is',this.totalQuantity,
        //   'var:this.totalPrice is', this.totalPrice,
        //   'atloc:method addItem'
        // );
        return;
      }
    }
    /**/
    this.items.push(cartItem);
    this.totalQuantity++;
    this.totalPrice += product.price    

    // console.log(
    //   'var:this.totalQuantity is',this.totalQuantity,
    //   'var:this.totalPrice is', this.totalPrice,
    //   'atloc:method addItem'
    // );    
   }

}

module.exports = Cart;