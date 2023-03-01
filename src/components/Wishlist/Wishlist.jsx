import cartAPI from "../../API/cart";
import wishlistAPI from "../../API/wishlist";
import { useContext } from "react";
import { UserContext, WishlistContext } from "../Contexts.js";
import { Container, Row, Col } from "react-bootstrap";
import WishlistCards from "./WishlistCards";

export default function Wishlist() {
  const cartApi = new cartAPI();
  const wishlistApi = new wishlistAPI();

  const { user } = useContext(UserContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const currUser = user.currUser;
  console.log(currUser);

  console.log(wishlist);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="fw-normal" style={{ color: "rgb(82, 115, 100)" }}>
                {currUser.firstName}'s Wishlist
              </h1>
            </div>
            {wishlist.length <= 0 ? (
              <div>No items in wishlist.</div>
            ) : (
              <div>
                {wishlist.map((item) => (
                  <div key={item.id}>
                    <WishlistCards
                      id={item.id}
                      name={item.name}
                      imgURL={item.imgURL}
                      price={item.price}
                      cartApi={cartApi}
                      wishlistApi={wishlistApi}
                      user={currUser}
                      wishlist={wishlist}
                      setWishlist={setWishlist}
                    />
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
