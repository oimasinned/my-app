import React, { useEffect, useState } from 'react';
import './ProductList.css'; // We'll add styles here

function ProductList() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
    }, []);

  const changeQuantity = (id, delta) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + delta) }
          : product
      )
    );
  };

  // Split into two columns
  const leftColumn = products.slice(0, 7);
  const rightColumn = products.slice(7);

  const renderColumn = column => (
    <div className="column">
      {column.map(product => (
        <div className="card" key={product.id}>
          <h4>{product.name}</h4>
          <p>Quantity: {product.quantity}</p>
          <div className="buttons">
            <button onClick={() => changeQuantity(product.id, -1)}>-</button>
            <button onClick={() => changeQuantity(product.id, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="product-list-container">
      <h2>Inventory List</h2>
      <div className="columns">
        {renderColumn(leftColumn)}
        {renderColumn(rightColumn)}
      </div>
    </div>
  );
}

export default ProductList;