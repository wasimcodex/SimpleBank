const { ethers, artifacts } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account: ', deployer.address)

  const Bank = await ethers.getContractFactory('Bank')
  const bank = await Bank.deploy()

  console.log('Bank address: ', bank.address)

  saveArtifacts(bank)
}

// save the address and artifact of the deployed contract in the frontend
const saveArtifacts = (bank) => {
  const fs = require('fs')
  const artifactDir = __dirname + '/../frontend/src/artifacts'

  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir)
  }

  const bankArtifact = artifacts.readArtifactSync('Bank')

  const artifact = {
    address: bank.address,
    abi: bankArtifact.abi,
  }

  console.log('Saving artifacts to: ', artifactDir)

  fs.writeFileSync(artifactDir + '/Bank.json', JSON.stringify(artifact))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
