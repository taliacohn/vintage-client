import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  function checkLoggedIn() {
    return axios.get("http://localhost:3001/isLoggedIn");
  }

  function loadPage() {
    console.log("loading...");
    checkLoggedIn().then((response) => {
      if (response.data.loggedIn) {
        navigate("account/user");
      } else {
        navigate("/account/login");
      }
    });
  }

  return (
    <Navbar className="navBarBox d-flex justify-content-between" expand="lg">
      <NavDropdown
        className="shopDrop mx-2"
        title="Shop"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/products/clothes">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="/products/shoes">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="/products/accessories">
          Accessories
        </NavDropdown.Item>
        <NavDropdown.Item href="/products/homedecor">
          Home Decor
        </NavDropdown.Item>
      </NavDropdown>
      <Navbar.Brand className="brandTitle mx-0" href="/">
        Second Love Vintage
      </Navbar.Brand>
      <Nav className="mx-2">
        <Link className="icon px-1" onClick={loadPage}>
          <PersonIcon />
        </Link>

        <Link className="icon px-1" to="/account/wishlist">
          <FavoriteIcon />
        </Link>

        <Link className="icon px-1" to="/account/cart">
          <ShoppingCartIcon />
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
