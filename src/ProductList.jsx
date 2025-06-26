import React, { useState } from 'react';
import './ProductList.css'; // We'll add styles here

function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Clear Tape', quantity: 0 },
        { id: 2, name: 'Brown Tape', quantity: 0 },
        { id: 3, name: 'Bubble Wrap', quantity: 0 },
        { id: 4, name: 'Clear Shrink Wrap', quantity: 0 },
        { id: 5, name: 'Black Shrink Wrap', quantity: 0 },
        { id: 6, name: 'Labels', quantity: 0 },
        { id: 7, name: 'Latex Gloves', quantity: 0 },
        { id: 8, name: 'Staples', quantity: 0 },
        { id: 9, name: 'Box Cutter Blades', quantity: 0 },
        { id: 10, name: 'Wooden Pallets', quantity: 0 },
        { id: 11, name: 'Paper', quantity: 0 },
        { id: 12, name: 'Ink Cartridges', quantity: 0 },
        { id: 13, name: 'Label Ribbon', quantity: 0 },
        { id: 14, name: 'Cardboard Boxes', quantity: 0 },
      ]);

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