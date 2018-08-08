// get the packages we need ================================================================

var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

const util = require('util');
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rounte for get all user (GET http://localhost:3000/)
app.get('/', function(req, res) {
    
        res.json({
                     Get: 'Success',
                     Content : 'Hello World !'
              });
  
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);