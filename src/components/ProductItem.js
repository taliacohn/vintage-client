import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

function ProductItem(props) {
  function addToWishlist() {
    alert("Added to Wishlist 🧞");
  }

  function addToCart() {
    alert("Added to shopping cart 🛒");
  }
  return (
    <Card style={{ width: "17rem", margin: "2%" }}>
      <Card.Img style={{ height: "20rem" }} variant="top" src={props.src} />
      <Card.Body>
        <Card.Title className="justify-content centre pb-4">
          {props.name}
        </Card.Title>
        <Card.Title> {props.price} </Card.Title>
        <div className="d-flex justify-content-between">
          <Button variant="outline-secondary" onClick={addToCart}>
            Add to Cart
          </Button>
          <Button variant="outline-secondary">
            <Link className="icon px-1" onClick={addToWishlist}>
              <FavoriteIcon />
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
