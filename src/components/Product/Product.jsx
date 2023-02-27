import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import popUp from "../../alerts/popup";

export default function Product({
  id,
  name,
  imgURL,
  price,
  user,
  cartApi,
  wishlistApi,
  setWishlist,
  wishlist,
}) {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) {
      sessionStorage.setItem("redirectPath", window.location.pathname);
      navigate("/account/login");
    } else {
      const result = await cartApi.addToCart(id, user.currUser.id);
      if (result.status === 200) {
        popUp("success", "Added to Cart");
      } else {
        popUp("error", "Could Not Add to Cart");
      }
    }
  };

  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleAddToWishlist = async () => {
    if (isInWishlist) {
      wishlistApi.deleteFromWishlist(id, user.currUser.id).then(() => {
        console.log(wishlist);
        setWishlist(wishlist.filter((item) => item.productID !== id));
      });
    } else {
      wishlistApi.addToWishlist(id, user.currUser.id).then(() => {
        setWishlist([...wishlist, { productID: id, userID: user.id }]);
      });
    }
  };

  return (
    <Card style={{ width: "17rem", height: "35rem", margin: "2%" }}>
      <Link
        key={id}
        to={{
          pathname: `/products/${name}}`,
          state: { isInWishlist, handleAddToWishlist, id, imgURL },
        }}
      >
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
              onClick={handleAddToWishlist}
              style={{ width: "5rem" }}
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
            <Button variant="outline-secondary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
