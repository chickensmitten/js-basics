class Product {
  // title = 'DEFAULT'; //default value
  // iageUrl; // undefined default value
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title; // refers to this class
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput = `<h2>Total: \$${1}</h2>`
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {

  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector("button"); // products with multiple buttons is not a problem because this query selector is only created inside this contained class
    addCartButton.addEventListener("click", this.addToCart.bind(this)); //using bind for this
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'pillow',
      'https://upload.wikimedia.org/wikipedia/commons/7/71/HK_SW_Hollywood_Road_Police_HQ_Art_Demo_12-2009_bed_and_pillows_in_white.JPG',
      19.99,
      'A soft fluffy'
    ),
    new Product(
      'carpet',
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Carpet_Khachagorg.jpg',
      89.99,
      'Thic carpet'
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl = cart.render();

    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);    
    renderHook.append(prodListEl);    
  }
}

const shop = new Shop();
shop.render();


