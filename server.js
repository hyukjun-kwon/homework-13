const express = require('express');
const expressLayouts = require("express-ejs-layouts");


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static('public')); 


// routes
app.use('/', require('./routes/index.js'));
app.use('/api', require('./routes/api.js'));


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server listening to port ${PORT}`) });