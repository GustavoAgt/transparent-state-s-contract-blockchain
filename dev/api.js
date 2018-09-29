var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');

const nodeAddress = uuid().split('-').join(''); //To generate a random string 

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
    const lastBlock = bc.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bc.pendingTransactions,
        index: lastBlock['index ']
    };
    const nonce = bc.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bc.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    bc.createNewTransaction(10.3, "00", nodeAddress);
    
    const newBlock = bc.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: "New block mined succesfully",
        block: newBlock

    }); 
});


app.listen(3000, function () {
    console.log('Listening port 3000...');
});