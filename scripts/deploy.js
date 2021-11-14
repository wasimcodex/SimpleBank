const { ethers } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account: ', deployer.address)

  const Bank = await ethers.getContractFactory('Bank')
  const bank = await Bank.deploy()

  console.log('Bank address: ', bank.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
