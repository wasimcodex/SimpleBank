import { useState } from 'react'

import NavBar from './components/NavBar'
import ConnectBtn from './components/ConnectBtn'
import StatusBox from './components/StatusBox'
import BankInfo from './components/BankInfo'
import Footer from './components/Footer'

function App() {
  const [status, setStatus] = useState('')
  const [connected, setConnected] = useState()
  const [wallet, setWallet] = useState()
  return (
    <>
      <NavBar />
      <ConnectBtn
        setStatus={setStatus}
        setConnected={setConnected}
        setWallet={setWallet}
      />
      <StatusBox status={status} />
      {connected && <BankInfo onAccoutChange={wallet} />}
      <Footer />
    </>
  )
}

export default App
