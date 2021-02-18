// Dependencies
const express = require('express');

// Setting up express
const app = express();
const PORT = process.env.PORT || 8080;

// /need this to access CSS files
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})