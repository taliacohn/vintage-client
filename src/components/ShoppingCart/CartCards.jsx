import { Row, Col, Card, Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import API from "../../API/wishlist";
import { useNavigate } from "react-router-dom";
import { handleAddToCart, handleAddToWishlist } from "../../API/index";

export default function CartCards(props) {
  const api = props.api;
  const user = props.user;

  const navigate = useNavigate();

  const isInWishlist = props.wishlist.some((item) => item.id === props.id);

  const handleDeleteFromCart = async (id) => {
    api
      .deleteFromCart(id, user.id)
      .then(() => {
        props.setCartItems(props.cartItems.filter((i) => i.id !== id));
        props.setTotal(
          props.cartItems.reduce((total, item) => total + item.price, 0)
        );
      })
      .catch((error) => {
        console.error("Error deleting cart item", error);
      });
  };

  return (
    <>
      <Card className="rounded-3 mb-4">
        <Card.Body className="p-4">
          <Row className="justify-content-between align-items-center">
            <Col md="2" lg="2" xl="2">
              <Card.Img
                className="rounded-3"
                fluid
                src={props.imgURL}
                alt={props.name}
              />
            </Col>
            <Col md="3" lg="3" xl="3">
              <p className="lead fw-normal mb-2">{props.name}</p>
            </Col>
            <Col md="3" lg="2" xl="2" className="offset-lg-1">
              <h5 className="mb-0">₪{Number(props.price).toFixed(2)}</h5>
            </Col>
            <Col md="1" lg="1" xl="1" className="text-end d-flex flex-column">
              <Button
                variant="outline-none"
                className="icon px-1 py-4 text-danger"
                onClick={() => handleDeleteFromCart(props.id)}
              >
                <DeleteIcon />
              </Button>
              <Button
                variant="outline-none"
                className="icon px-1 py-4 text-secondary"
                onClick={() =>
                  handleAddToWishlist(
                    isInWishlist,
                    props.user,
                    props.id,
                    props.imgURL,
                    props.price,
                    props.name,
                    props.setWishlist,
                    props.wishlist,
                    window.location.pathname,
                    navigate
                  )
                }
              >
                {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
