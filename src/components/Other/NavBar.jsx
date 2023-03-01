import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext, UserContext } from "../Contexts";

function NavBar() {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  console.log(cart);

  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/shop/${category}`);
  };

  return (
    <Navbar
      className="navBarBox d-flex justify-content-between"
      expand="lg"
      fixed="top"
    >
      <NavDropdown
        className="shopDrop mx-2 px-2"
        title="Shop"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item onClick={() => handleClick("clothes")}>
          Clothes
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleClick("shoes")}>
          Shoes
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleClick("accessories")}>
          Accessories
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleClick("home_decor")}>
          Home Decor
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleClick("all")}>
          All
        </NavDropdown.Item>
      </NavDropdown>
      <Navbar.Brand className="brandTitle mx-0" href="/">
        Second Love Vintage
      </Navbar.Brand>
      <Nav className="mx-2">
        <Link
          className="icon px-1"
          to={user ? "/account/user" : "/account/login"}
        >
          <PersonIcon />
        </Link>

        <Link
          className="icon px-1"
          to={user ? "/account/wishlist" : "/account/login"}
        >
          <FavoriteIcon />
        </Link>

        <Link
          className="icon px-1"
          to={user ? "/account/cart" : "/account/login"}
        >
          <ShoppingCartIcon />
          {cart.length > 0 && (
            <Badge
              bg="danger"
              className="position-absolute start-80 translate-middle"
            >
              {cart.length}
              <span className="visually-hidden">items in cart"</span>
            </Badge>
          )}
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
