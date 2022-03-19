# EthereumWallet
basically using web3 on Node js - javascript 

Step 1: Install project packages
            > npm init
Step 2: install WEB3
            > npm i web3
Step 3: shifting to start writing node js
            > node
Step 4: create Web3 Class 
            > Web3 = require("web3")
Step 5: Initialize web3 variable to be used in account creation
            > web3 = new Web3();
Step 6: Ethereum Wallet/Acc creation that you are going to get Address and private key
            > web3.eth.accounts.create();

# Additional Developments
Encrypt the Wallet and initialize in a variable Data
        > data = web3.eth.accounts.encrypt('wallet_address', "pwd");

Decrypting using the initializes password and the data variable carrying encrypted also you can test with wrong password
        > data = web3.eth.accounts.decrypt(data, "1234567");

Create multiple Wallets 
        > web3.eth.accounts.wallet.create(required_number_of_wallets);

References::
 https://www.youtube.com/watch?v=n9QLsSagUzE