import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)



function handleDecreaseClick(productId){
    // forma1: decrease comida ao 1-,-2 quando será 0 mudará -1, -2, etc
    //  setProducts(products.map(product => {
    //   if (product.id === productId) {
    //     return {
    //       ...product,
    //       count: product.count - 1
    //     };
    //   } else {
    //     return product;
    //   }
    // }))


    // forma: quando comida será 1 e clica no (-), deletará essa comida completamente.
  const newProducts = [];

  for (const product of products) {
    if (product.id === productId) {
      if (product.count > 1) {
        const updatedProduct = { ...product, count: product.count - 1 };
        newProducts.push(updatedProduct);
      }
      // إذا count === 1 → لا نضيف هذا المنتج (يتم حذفه)
    } else {
      newProducts.push(product); // نضيف باقي المنتجات كما هي
    }
  }

  setProducts(newProducts);
}



  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {handleDecreaseClick(product.id)}}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
