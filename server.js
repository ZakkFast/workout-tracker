const express = require('express');
const connectDB = require('./config/db');

const app = express();
//Connect Database
connectDB();
//Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => res.send('API Running'));

app.use(express.static('public'));

app.use(require('./routes/index.js'));
app.use(require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
