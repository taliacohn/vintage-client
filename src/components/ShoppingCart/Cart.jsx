import API from "../../API/cart";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext.js";
import CartCards from "./CartCards";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Cart(props) {
  const api = new API();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useContext(UserContext);
  const currUser = user.currUser;

  const handleNewOrder = async () => {
    const date = new Date();
    const orderDate = convertToString(date);
    const order = await api.createNewOrder(currUser.email, total, orderDate);
    clearCart(order.id);
  };

  const clearCart = (orderId) => {
    console.log(orderId);
    cartItems.map((product) => {
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
    api.getCartItems(currUser.id).then((result) => setCartItems(result));
    console.log(cartItems);
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + Number(item.price),
      0
    );
    setTotal(newTotal.toFixed(2));
  }, [cartItems]);

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
            {cartItems.length <= 0 ? (
              <div>No items in cart.</div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <CartCards
                      id={item.id}
                      name={item.name}
                      imgURL={item.imgURL}
                      price={item.price}
                      api={api}
                      setTotal={setTotal}
                      setCartItems={setCartItems}
                      user={currUser}
                      cartItems={cartItems}
                      wishlist={props.wishlist}
                      setWishlist={props.setWishlist}
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
