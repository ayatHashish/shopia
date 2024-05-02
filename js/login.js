var express = require("express");
var app = express();

app.listen(3000);

app.use(express.json());

app.get("/api" , (req, res) => {
    res.sendFile("signup.html")
})
app.post("/api" , (req, res) =>{
    console.log(req.body)
})