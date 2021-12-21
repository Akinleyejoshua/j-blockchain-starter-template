const Web3 = require("web3");
const solc = require("solc");
const fs = require("fs");

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:65523"));

let fileContents = fs.readFileSync("MyContract.sol").toString();

// console.log(fileContents);

var input = {
    language: "Solidity",
    sources: {
        "MyContract.sol" : {
            content: fileContents,
        }
    },
    settings: {
        outputSelection : {
            "*" : {
                "*":["*"]
            }
        }
    }
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));

// console.log(output);

ABI = output.contracts["MyContract.sol"]["FreeToken"].abi;
// console.log(ABI)
bytecode = output.contracts["MyContract.sol"]["FreeToken"].evm.bytecode.object;
// console.log(bytecode);