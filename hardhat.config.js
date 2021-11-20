require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "J__Z8xuljOndNpglFDI1BM9Apqm_WIsz";
const ROPSTEN_PRIVATE_KEY =
  "aac61f475420f5eb14063b868fafb0778fa6eca4f6a7c2678c00e205c9e6834e";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
