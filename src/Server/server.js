const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "products": [
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
    ]});
});

app.listen(5000, () => {console.log("Server Started on port 5000")});