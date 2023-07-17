const { Console } = require("console");
const express = require("express");

const path = require ("path");

const app = express();

app.listen(8000, () => 
    console.log("Listo")
);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
});