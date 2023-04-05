const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//connect to workbench database 
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'ecommerce_products',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database.');
  }
});
//'Fetched products' if able to pull from database 
app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send(err);
    } else {
      console.log('Fetched products:', rows);
      res.json(rows);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});