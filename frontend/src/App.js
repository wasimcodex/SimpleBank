import NavBar from './components/NavBar'
import ConnectBtn from './components/ConnectBtn'
import StatusBox from './components/StatusBox'

import { useState } from 'react'

function App() {
  const [status, setStatus] = useState('')
  const [connected, setConnected] = useState(false)
  return (
    <>
      <NavBar />
      <ConnectBtn setStatus={setStatus} setConnected={setConnected} />
      <StatusBox status={status} />
    </>
  )
}

export default App
