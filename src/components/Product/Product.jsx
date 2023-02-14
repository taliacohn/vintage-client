import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  function addToWishlist() {}
  function addToCart() {}

  return (
    <Card style={{ width: "17rem", margin: "2%" }}>
      <Link key={product.id} to={`/products/${product.id}`}>
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={product.imgURL}
          className="card-img-top"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Card.Title className="justify-content centre pb-4">
          {product.name}
        </Card.Title>
        <Card.Text>₪{product.price}</Card.Text>
        <div>
          <Button variant="outline-secondary">
            <Link className="icon px-1" onClick={addToWishlist}>
              <FavoriteIcon />
            </Link>
          </Button>
          <Button variant="outline-secondary" onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
