require('dotenv').config()
require('@nomiclabs/hardhat-waffle')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
  solidity: '0.7.3',
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
}
