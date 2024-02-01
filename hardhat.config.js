require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "04c1bb09d60f4e0eab9e9c4371dc4436";
const pvk = "efaaac31bc43e9143a8c0e91353f25d537a86a47991bebdf8f1e281787954e7a";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [pvk],
    },
  },
  etherscan: {
    apiKey: "TF3G4Y62NKI4AZJMM7C33TQPKJ14ZKZHXV",
  },
};
