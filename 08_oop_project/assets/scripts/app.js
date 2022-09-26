class Product {
  title = 'DEFAULT'; //default value
  iageUrl; // undefined default value
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title; // refers to this class
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
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
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
