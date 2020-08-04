const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 2430;
const cors = require('cors');


app.get("", (req, res, next) => {
    res.json({
        message: "deu bom por aqui, sempre nos",
    });  
});

app.listen(port, (err) => {
    if(err) return console.log(`Não startou ${err}`)
    console.log("running on port", port)
});