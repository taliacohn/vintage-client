import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import API from "../../API/wishlist";
import { UserContext } from "../UserContext.js";
import UserCard from "./UserCard";
import { useEffect } from "react";

export default function UserPage({ setWishlist }) {
  const noProfPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const { user, setUser } = useContext(UserContext);
  const api = new API();

  const currUser = user.currUser;

  useEffect(() => {
    api.getWishlist(currUser.id).then((res) => setWishlist(res));
  }, [currUser.id, setWishlist]);

  return (
    <Row>
      <Col>
        <UserCard user={currUser} setUser={setUser} />
      </Col>
      <Col>
        <Card className="orderHistoryCard" style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title className="mb-4">Order History</Card.Title>
            <Card.Text className="">No orders yet.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
