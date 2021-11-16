import NavBar from './components/NavBar'
import ConnectBtn from './components/ConnectBtn'
import StatusBox from './components/StatusBox'

import { useState } from 'react'
import BankInfo from './components/BankInfo'

function App() {
  const [status, setStatus] = useState('')
  const [connected, setConnected] = useState()
  return (
    <>
      <NavBar />
      <ConnectBtn setStatus={setStatus} setConnected={setConnected} />
      <StatusBox status={status} />
      {connected && <BankInfo />}
    </>
  )
}

export default App
