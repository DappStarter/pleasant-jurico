require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember exchange include enrich swift general'; 
let testAccounts = [
"0xf67fd465fcf93b57893bd5186e236d9c6becd846945aeb71691309d0577ba6b7",
"0x2d5c2a6b90268903fbf0ecfd03c517fb29f386a3b578f4077a6583bba3464a62",
"0xd90535c85734c5e2ddcdbfcd120fe3fc6a56287eb3f8eada7e31af92720542ea",
"0x519020f3b09cb440893e77f4f0aa686491bb227a8f3e19263f4fa29eb6707a83",
"0x83b468a0e24e73eca041c1a90dbee55ed3b30a5adb8592caf8983fbda359624c",
"0x022ec91fffd662af06810c7e1520baffc772928f33936026e178a764e9cdd677",
"0x049f76ed5d29129589ea80d760ef7ebd0d9d58abbfa4c11b98bfba5bb2b2dc2a",
"0x6a20d989f69ce2bee20ecc09efa298d6c7f23b711a55b019e1bcdcb6a5c061d6",
"0xbeeb5fb8f310843497941f9760ce793d4360d0c3cae6bf0071705d04171af9ab",
"0x994e4c73819c98fccec041e7511e39079b9025f7eeb50f0885e0e1df7666309f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

