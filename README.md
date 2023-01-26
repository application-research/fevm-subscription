# Estuary FEVM Subscription Contract

The repository consists of ERC 1155 Contracts for Estuary Subscription

# How to deploy the contract

## Method 1: Remix
- Ensure that you have metamask setup and have tFil. Instructions [here](https://docs.filecoin.io/fvm/how-tos/add-to-metamask/).
- Open a blank workspace
- Load the files to local workspace
- Compile the EstuarySubscription.sol

## Method 2: Truffle
Install the truffle library
```
npm install
```

Grab your network private key and put it on the truffle-config
```
open truffle-config.js
const privateKeys = ["<private key of deployer>"]; 
```

Run the following commands to deploy
```
truffle compile
truffle build
truffle deploy --network testnet // for testnet (mainnet for main network)
```

## Live contract
https://explorer.glif.io/tx/0x494c538b9075dd63566e9503b572dda401273e5341e2a414ab4d8f8101b5fe78/?network=hyperspace
