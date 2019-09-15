const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
var bodyParser = require("body-parser");
var router=express.Router();
var approutes=require("./app/api")(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",approutes);


app.listen(8080, function () {
    console.log('Server is Running on 8080');
});