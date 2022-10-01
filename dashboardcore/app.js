var express = require("express");
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
})


app.get("/users", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
