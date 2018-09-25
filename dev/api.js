var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bc = new Blockchain();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/blockchain', function (req, res) {
    res.send(bc);
});

app.post('/transaction', function (req, res) {
    const blockIndex = bc.createNewTransaction(req.body.amount, req.body.sender, req.body.recipe);
    res.json({
        note: `transaction will be added in block ${blockIndex}.`
    });
});

app.get('/mine', function (req, res) {

});


app.listen(3000, function () {
    console.log('Listening port 3000...');
});