import { IoIosRefresh } from 'react-icons/io'
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Col,
  Row,
  Alert,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getBalance, depositEth, withdrawEth } from '../utils/bankFunctions'

const BankInfo = ({ onAccoutChange }) => {
  const [balanceINR, setBalanceINR] = useState(0)
  const [balanceETH, setBalanceETH] = useState(0)
  const [showDeposit, setShowDeposit] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [exhRate, setExhRate] = useState(0)
  const [inputINR, setInputINR] = useState(null)
  const [inputETH, setInputETH] = useState(null)
  const [response, setResponse] = useState(null)

  const handleShowDeposit = () => {
    setShowDeposit(true)
  }

  const handleShowWithdraw = () => {
    setShowWithdraw(true)
  }

  const handleClose = () => {
    setShowDeposit(false)
    setShowWithdraw(false)
    setInputINR(null)
    setInputETH(null)
    setResponse(null)
  }

  const checkBalance = async () => {
    const balance = await getBalance()
    setBalanceETH(balance.eth)
    setBalanceINR(balance.inr)
    setExhRate(balance.exhRate)
  }

  const handleInoutINR = (e) => {
    setInputINR(e.target.value)
    setInputETH((e.target.value / exhRate).toFixed(18))
  }

  const handleDeposit = async () => {
    setResponse(null)
    const deposit = await depositEth(inputETH.toString())
    setInputETH(null)
    setInputINR(null)
    setResponse(deposit.status)
  }

  const handleWithdraw = async () => {
    if (inputINR > balanceINR) {
      setResponse('Insufficient Balance')
    } else {
      setResponse(null)
      const withdraw = await withdrawEth(inputETH.toString())
      setInputETH(null)
      setInputINR(null)
      setResponse(withdraw.status)
    }
  }

  useEffect(() => {
    checkBalance()
  }, [onAccoutChange])

  return (
    <>
      <div className="balance-card">
        <h1>
          Your Balance
          <IoIosRefresh className="refresh-icon" onClick={checkBalance} />
        </h1>
        <h3 className="balance-inr">{parseFloat(balanceINR).toFixed(2)} INR</h3>
        <h3 className="balance-eth">{parseFloat(balanceETH).toFixed(4)} ETH</h3>
        {!showDeposit && !showWithdraw && (
          <div className="btn-grp">
            <Button
              className="deposit-btn"
              variant="success"
              onClick={handleShowDeposit}
            >
              Deposit
            </Button>
            <Button
              className="withdraw-btn"
              variant="warning"
              onClick={handleShowWithdraw}
            >
              Withdraw
            </Button>
          </div>
        )}
        {showDeposit || showWithdraw ? (
          <>
            <Container>
              <Row className="justify-content-center ">
                <Col md="6">
                  <InputGroup className="amount-input">
                    <FormControl
                      placeholder="Enter Amount in INR"
                      type="number"
                      value={inputINR > 0 ? inputINR : ''}
                      onChange={handleInoutINR}
                    />
                    <InputGroup.Text>INR</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                  <InputGroup className="amount-input">
                    <FormControl
                      placeholder="ETH Equivalent"
                      type="number"
                      value={inputETH > 0 ? inputETH : ''}
                      readOnly
                    />
                    <InputGroup.Text>ETH</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
            </Container>
            <div className="btn-grp">
              <Button
                className="deposit-btn"
                variant="success"
                onClick={showDeposit ? handleDeposit : handleWithdraw}
              >
                {showDeposit ? 'Deposit' : 'Withdraw'}
              </Button>
              <Button
                className="withdraw-btn"
                variant="info"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
            {response && (
              <Container>
                <Row className="justify-content-center">
                  <Col md="6">
                    <Alert variant="info">{response}</Alert>
                  </Col>
                </Row>
              </Container>
            )}
          </>
        ) : null}
      </div>
    </>
  )
}

export default BankInfo
