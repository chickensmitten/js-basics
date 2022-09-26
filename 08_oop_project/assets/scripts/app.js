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

class ProductItem {
  constructor(product) {
    this.product = product;
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
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);    
  }
}

const productList = new ProductList();
productList.render();

