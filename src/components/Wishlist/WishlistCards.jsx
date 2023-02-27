import { Row, Col, Card, Button } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function WishlistCards(props) {
  const user = props.user;
  console.log(user);

  const handleDeleteFromWishlist = async (id) => {
    props.wishlistApi
      .deleteFromWishlist(id, user.id)
      .then(() => {
        props.setWishlist(props.wishlist.filter((i) => i.id !== props.id));
      })
      .catch((error) => {
        console.error("Error deleting cart item", error);
      });
  };

  console.log(props.wishlist);

  const handleAddToCart = async (id) => {
    props.cartApi
      .addToCart(id, user.id)
      .then(() => {
        props.setWishlist(props.wishlist.filter((i) => i.id !== props.id));
      })
      .catch((error) => {
        console.error("Error deleting wishlist item", error);
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
                className="icon px-1 py-4"
                onClick={() => handleAddToCart(props.id)}
              >
                <AddShoppingCartIcon />
              </Button>
              <Button
                variant="outline-none"
                className="icon px-1 py-4 text-secondary"
                onClick={() => handleDeleteFromWishlist(props.id)}
              >
                <FavoriteIcon />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
