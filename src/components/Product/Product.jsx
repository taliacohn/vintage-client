import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleAddToCart, handleAddToWishlist } from "../../API/index";

export default function Product({
  id,
  name,
  imgURL,
  price,
  user,
  setWishlist,
  wishlist,
  cart,
  setCart,
}) {
  const navigate = useNavigate();

  const isInWishlist = wishlist.some((item) => item.id === id);

  return (
    <Card style={{ width: "17rem", height: "35rem", margin: "2%" }}>
      <Link key={id} to={`/products/${id}/${name.replace(/\s+/g, "-")}`}>
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={imgURL}
          className="card-img-top"
          alt={name}
        />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="justify-content centre">{name}</Card.Title>
        </div>
        <div>
          <Card.Text>₪{price}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="outline-secondary"
              className="icon px-1"
              onClick={() =>
                handleAddToWishlist(
                  isInWishlist,
                  user,
                  id,
                  imgURL,
                  price,
                  name,
                  setWishlist,
                  wishlist,
                  window.location.pathname,
                  navigate
                )
              }
              style={{ width: "5rem" }}
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() =>
                handleAddToCart(
                  user,
                  window.location.pathname,
                  id,
                  navigate,
                  imgURL,
                  price,
                  name,
                  cart,
                  setCart
                )
              }
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
