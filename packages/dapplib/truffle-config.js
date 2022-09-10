require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name recipe machine minor hidden end army genuine'; 
let testAccounts = [
"0xabc625581ef46e9f3fefc4e677e7dbfc9b9e69ee7d466239a00b0df218b10753",
"0x0aac7c4e73e186072b3efffbb5fad87cd0b9563479e2a556a7d26292f563d9c8",
"0xf23e483efc41384beceb9453d7fec02e11e0fb91f5f46c080c9a848013f86704",
"0x242841943ca6f8ffba35abe8cff55fd715e75f8e515481f981df95d8d5c72a44",
"0x8b55cd11f71601d9b75f7cf595eaab21e148eafd3080350b5dc88bad8a138908",
"0xae639f876f4006f863a69e195a328bd89f58a4874bd542a23404c0a36cde842b",
"0xbb6846797d3ca4c95efa3bf52800df857b3df6a4ad89773af4cb381bb7d09c32",
"0x8126d82de065ffd8e14e47da790ef77e3a07bc9d289941e7af37abee67ebb5ca",
"0x8f81f94fa60aaaeb5a3602f7ea1140e54eb9f7a7d6fb312db7deebe1abeb9a90",
"0x8c1c0de0c0bdf060f18085c679ff21817bc4b9d3312ed40b662049af8758d445"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

