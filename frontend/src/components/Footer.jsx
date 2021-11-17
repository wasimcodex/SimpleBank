import { IoIosInformationCircleOutline } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        <IoIosInformationCircleOutline className="info-icon" /> This application
        in running on rinkeby test network. Please only use test Ethers.
      </p>
    </footer>
  )
}

export default Footer
