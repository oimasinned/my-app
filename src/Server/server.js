const express = require('express');
const app = express();
app.use(express.json());

let products = [
    { id: 1, name: 'Clear Tape', quantity: 55 },
    { id: 2, name: 'Brown Tape', quantity: 55 },
    { id: 3, name: 'Bubble Wrap', quantity: 55 },
    { id: 4, name: 'Clear Shrink Wrap', quantity: 55 },
    { id: 5, name: 'Black Shrink Wrap', quantity: 55 },
    { id: 6, name: 'Labels', quantity: 55 },
    { id: 7, name: 'Latex Gloves', quantity: 55 },
    { id: 8, name: 'Staples', quantity: 55 },
    { id: 9, name: 'Box Cutter Blades', quantity: 55 },
    { id: 10, name: 'Wooden Pallets', quantity: 55 },
    { id: 11, name: 'Paper', quantity: 55 },
    { id: 12, name: 'Ink Cartridges', quantity: 55 },
    { id: 13, name: 'Label Ribbon', quantity: 55 },
    { id: 14, name: 'Cardboard Boxes', quantity: 55 }];

app.patch('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { quantity } = req.body;
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  product.quantity = quantity;
  res.json(product);
});

app.get('/api', (req, res) => {
  res.json({ products });
});

app.listen(5000, () => {console.log("Server Started on port 5000")});