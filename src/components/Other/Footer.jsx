import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Navbar
      fixed="bottom"
      expand="lg"
      variant="light"
      bg="light"
      className="d-flex justify-content-between px-4"
    >
      <Navbar.Brand className="footerNav">Second Love Vintage Ⓒ</Navbar.Brand>

      <Link className="footerNav" to="/about">
        About
      </Link>

      <Link className="footerNav" to="/contact">
        Contact
      </Link>
    </Navbar>
  );
}

export default Footer;
