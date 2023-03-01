import API from "../../API/cart";
import { useState, useContext } from "react";
import { CartContext, UserContext, WishlistContext } from "../Contexts";
import CartCards from "./CartCards";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Cart() {
  const api = new API();
  const [total, setTotal] = useState(0);
  const { user } = useContext(UserContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);
  const currUser = user.currUser;

  const handleNewOrder = async () => {
    const date = new Date();
    const orderDate = convertToString(date);
    const order = await api.createNewOrder(currUser.email, total, orderDate);
    clearCart(order.id);
  };

  const clearCart = (orderId) => {
    console.log(orderId);
    cart.map((product) => {
      api.setProductsInOrder();
    });
  };

  const convertToString = (date) => {
    const month = Number(date.getMonth()) + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const newMonth = month < 10 ? "0" + month.toString() : month;
    const newDay = Number(day) < 10 ? "0" + day : day;
    return `${year}=${newMonth}-${newDay}`;
  };

  useEffect(() => {
    const newTotal = cart.reduce(
      (total, item) => total + Number(item.price),
      0
    );
    setTotal(newTotal.toFixed(2));
  }, [cart]);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="fw-normal" style={{ color: "rgb(82, 115, 100)" }}>
                Shopping Cart
              </h1>
            </div>
            {cart.length <= 0 ? (
              <div>No items in cart.</div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id}>
                    <CartCards
                      id={item.id}
                      name={item.name}
                      imgURL={item.imgURL}
                      price={item.price}
                      api={api}
                      setTotal={setTotal}
                      setCartItems={setCart}
                      user={currUser}
                      cartItems={cart}
                      wishlist={wishlist}
                      setWishlist={setWishlist}
                    />
                  </div>
                ))}
                <div className="d-flex-col text-end mb-4">
                  <h5 className="py-2">₪{total}</h5>
                  <Button
                    variant="outline-secondary"
                    className="px-3 py-2"
                    onClick={handleNewOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
