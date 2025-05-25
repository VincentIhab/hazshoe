import '../scss/style.scss';

fetch('assets/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.createElement('div');
    container.className = 'product-grid';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
      `;
      container.appendChild(card);
    });

    document.querySelector('main').appendChild(container);
  });
