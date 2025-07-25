import React, { useEffect, useState } from 'react';
import './ProductList.css'; // We'll add styles here
import Order from './Order';

function ProductList({ setOrders, orders}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
    }, []);

  const changeQuantity = (id, delta) => {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const newQuantity = Math.max(0, product.quantity + delta);

  fetch(`/api/products/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ quantity: newQuantity }),
})
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => { throw new Error(text); });
    }
    return response.json();
  })
  .then(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  })
  .catch(err => console.error('Failed to update:', err));
};

  // Split into two columns
  const leftColumn = products.slice(0, 7);
  const rightColumn = products.slice(7);

  const handleOrder = (product) => {
    const alreadyOrdered = orders.some(order => order.productId === product.id);
    if (alreadyOrdered) return;
    setOrders(prev => [
      ...prev,
      { name: product.name, quantity: 10, productId: product.id }
    ]);
  };

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
        {product.quantity <= 50 && !orders.some(order => order.productId === product.id) && (
          <button className='order-button' onClick={() => handleOrder(product)}>
            Create Order
          </button>
        )}
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