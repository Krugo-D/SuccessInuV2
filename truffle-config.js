const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {           // ETH mainnet forked ganachi-cli
      host: "127.0.0.1",    
      port: 8545,            
      network_id: "*",       // Any network 
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://eth-ropsten.alchemyapi.io/v2/0UowSOH_ym8yES4Lgu7aHJhGTcLLUY8J`),
      network_id: 3,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://eth-mainnet.alchemyapi.io/v2/zvAIbXv8G6mUjI287IKG-w0GsV7PLG-e`),
      network_id: 1,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
}