import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import { connectWallet, getWalletStatus } from '../utils/connectWallet'

export const ConnectBtn = ({ setStatus, setConnected }) => {
  const [walletAddress, setWalletAddress] = useState('')

  const handleConnect = async () => {
    const walletResponse = await connectWallet()
    setStatus(walletResponse.status)
    setWalletAddress(walletResponse.address)
  }

  const checkWalletStatus = async () => {
    const walletResponse = await getWalletStatus()
    setStatus(walletResponse.status)
    setWalletAddress(walletResponse.address)
  }

  const walletListener = () => {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
          checkWalletStatus()
        })
      }
  }

  useEffect(() => {
    checkWalletStatus()
    walletListener()
  })

  return (
    <div className="connect-btn">
      <Button variant="primary" onClick={handleConnect}>
        {walletAddress.length === 0
          ? 'Connet Wallet'
          : 'Connected: ' +
            String(walletAddress).substring(0, 6) +
            '...' +
            String(walletAddress).substring(38)}
      </Button>
    </div>
  )
}

export default ConnectBtn
