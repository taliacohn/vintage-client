import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import UserCard from "./UserCard";

export default function UserPage() {
  const noProfPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const { user, setUser } = useContext(UserContext);

  const currUser = user.currUser;

  function log() {
    console.log(user);
  }

  log();

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
