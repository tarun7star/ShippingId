require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    fantomtest: {
      url: process.env.PROVIDER_URL || "https://rpc.ankr.com/fantom_testnet",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
