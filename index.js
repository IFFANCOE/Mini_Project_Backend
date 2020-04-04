let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

app.listen(5000, () => console.log("Server is running"));