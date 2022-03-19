Web3 = require("web3");
web3 = new Web3();
web3.eth.accounts.create();
json = web3.eth.accounts.encrypt(privateKey, password);
web3.eth.accounts.decrypt(json, password);

// web3.eth.accounts.signTransaction(tx, privateKey);
// https://www.youtube.com/watch?v=n9QLsSagUzE

web3.eth.accounts.wallet;
web3.eth.accounts.wallet.create(2);
list = web3.eth.accounts.wallet.encrypt(password);
web3.eth.accounts.wallet.decrypt(list, password);


