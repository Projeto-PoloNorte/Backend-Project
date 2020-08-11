const express = require("express");
const app = express();
const routes = require("./src/routes")
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 2430;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());



app.use(routes);

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        error: {
           message: error.message
        }
    });
});

app.listen(port, (err) => {
    if(err) return console.log(`Não startou ${err}`)
    console.log("running on port", port)
});