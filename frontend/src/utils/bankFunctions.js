const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(alchemyKey)

const { abi, address } = require('../artifacts/Bank.json')

export const depositEth = async (amount) => {
  if (parseFloat(amount) <= 0) {
    return {
      status: 'Please enter a valid amount',
    }
  }

  window.contract = await new web3.eth.Contract(abi, address)

  const WeiAmount = web3.utils.toHex(web3.utils.toWei(amount, 'ether'))

  const txParams = {
    to: address,
    from: window.ethereum.selectedAddress,
    value: WeiAmount,
    data: window.contract.methods.deposit().encodeABI(),
  }

  try {
    await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [txParams],
    })
    return {
      status: 'Transaction Successful. Refresh in a moment.',
    }
  } catch (error) {
    return {
      status: 'Transaction Failed' + error.message,
    }
  }
}

export const withdrawEth = async (amount) => {
  window.contract = await new web3.eth.Contract(abi, address)

  const WeiAmount = web3.utils.toWei(amount, 'ether')

  const txParams = {
    to: address,
    from: window.ethereum.selectedAddress,
    data: window.contract.methods.withdraw(WeiAmount).encodeABI(),
  }

  try {
    await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [txParams],
    })
    return {
      status: 'Transaction Successful. Refresh in a moment',
    }
  } catch (error) {
    return {
      status: 'Transaction Failed' + error.message,
    }
  }
}

export const getBalance = async () => {
  window.contract = await new web3.eth.Contract(abi, address)

  const reqParams = {
    to: address,
    from: window.ethereum.selectedAddress,
    data: window.contract.methods.getBalance().encodeABI(),
  }

  try {
    const response = await window.ethereum.request({
      method: 'eth_call',
      params: [reqParams],
    })
    const exhRate = await exchangeRate()
    const balance = web3.utils.fromWei(response, 'ether')
    return {
      inr: balance * exhRate,
      eth: balance,
      exhRate: exhRate,
    }
  } catch (error) {
    return {
      status: 'Check Failed ' + error.message,
    }
  }
}

export const exchangeRate = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr',
  )
  const data = await response.json()
  return data.ethereum.inr
}
