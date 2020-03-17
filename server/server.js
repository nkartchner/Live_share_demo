const express = require('express');
const cors = require("cors");
const app = express();
////////////////////////////// NEED TO BE BEFORE THE ROUTES //////////////////////////////
require("./config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
////////////////////////////// NEED TO BE BEFORE THE ROUTES //////////////////////////////

require('./routes/product.route')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
