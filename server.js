const express = require('express');
const connectDB = require('./config/db');
const logger = require('morgan');

const app = express();
//Connect Database
connectDB();
//Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"))

// app.get('/', (req, res) => res.send('API Running'));

app.use(express.static('public'));


app.use(require('./routes/api'));
app.use(require('./routes/index.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));