export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addresses = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const obj = {
        address: addresses[0],
        connected: true,
        status: '',
      }
      return obj
    } catch (error) {
      return {
        address: '',
        connected: false,
        status: error.message,
      }
    }
  } else {
    return {
      address: '',
      connected: false,
      status: (
        <a href="https://metamask.io/" target="_blank" rel="noreferrer">
          {' '}
          You need to install Metamask
        </a>
      ),
    }
  }
}

export const getWalletStatus = async () => {
  if (window.ethereum) {
    try {
      const addresses = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addresses.length > 0) {
        return {
          address: addresses[0],
          connected: true,
          status: '',
        }
      } else {
        return {
          address: '',
          connected: false,
          status: '🦊 Please connect to Metamask Wallet',
        }
      }
    } catch (error) {
      return {
        address: '',
        connected: false,
        status: error.message,
      }
    }
  } else {
    return {
      address: '',
      connected: false,
      status: (
        <a href="https://metamask.io/" target="_blank" rel="noreferrer">
          {' '}
          You need to install Metamask
        </a>
      ),
    }
  }
}
