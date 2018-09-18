const blockChain = require('./blockchain');

const bitc = new blockChain();

const previousBlockHash = 'GASD5D95A9S5DD262AS9DS130G38S';

const currentBlockData = [
    {
        amount: 5,
        sender: 'DS7D8SAD78A7SD',
        recipient: 'DDS6T566WE56WE5R'
    },

    {
        amount: 65,
        sender: 'ASD445SA4D45ASD',
        recipient: '99899823ASD123ASD13'
    },

    {
        amount: 22,
        sender: 'DASD656556656F65SF',
        recipient: '92222S89DA56S5D6A'
    }
];

const nonce = 120;  

console.log(bitc.hashBlock(previousBlockHash, currentBlockData, nonce));