import { IoIosRefresh } from 'react-icons/io'
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Col,
  Row,
} from 'react-bootstrap'
import { useState } from 'react'

const BankInfo = () => {
  const [balanceINR, setBalanceINR] = useState(0)
  const [balanceETH, setBalanceETH] = useState(0)
  const [showDeposit, setShowDeposit] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)

  const handleShowDeposit = () => {
    setShowDeposit(true)
  }

  const handleShowWithdraw = () => {
    setShowWithdraw(true)
  }

  const handleClose = () => {
    setShowDeposit(false)
    setShowWithdraw(false)
  }

  return (
    <>
      <div className="balance-card">
        <h1>
          Your Balance
          <IoIosRefresh className="refresh-icon" />
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
                      readOnly
                    />
                    <InputGroup.Text>ETH</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
            </Container>
            <div className="btn-grp">
              <Button className="deposit-btn" variant="success">
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
          </>
        ) : null}
      </div>
    </>
  )
}

export default BankInfo
