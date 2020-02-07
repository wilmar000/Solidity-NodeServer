var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
/////////
const Web3 = require("web3");
var Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var TestContract = new web3.eth.Contract(
  [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "_spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes"
        }
      ],
      name: "approveAndCall",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256"
        }
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256"
        }
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "_to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_from",
          type: "address"
        },
        {
          internalType: "address",
          name: "_to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      payable: false,
      stateMutability: "nonpayable",
      type: "fallback"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "_spender",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "remaining",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "total_supply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "supply",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "version",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ],
  "0xE8Baba1B2c2797e7eA6550B6fdd6E3AeED46d117" // change with your contract
);

var account = "<0x01F9338f2c7Db2724fBe0449264C3E9E286eb7F2>";
//change 0x01F9338f2c7Db2724fBe0449264C3E9E286eb7F2

var privateKey = new Buffer.from(
  "4288b7c552d512ad0f3b5cad455195aceefd3122a3125bd4cd8714f4f17600b8",
  "hex"
  //change 4288b7c552d512ad0f3b5cad455195aceefd3122a3125bd4cd8714f4f17600b8
);

var data = TestContract.methods.totalSupply().encodeABI();
var rawTx = {
  nonce: "0x02", /// try nonce, this dependend of the number of transaction, in my case was 2
  gasPrice: "0x09184e72a000", // increase gas if send error
  gasLimit: "0x6710",
  to: "0x0000000000000000000000000000000000000000",
  value: "0x00",
  data: data
};
var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

web3.eth
  .sendSignedTransaction("0x" + serializedTx.toString("hex"))
  .on("receipt", console.log);
