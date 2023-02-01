import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.js";

function UserPage() {
  const noProfPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const currUser = user.currUser;

  const [firstName, setFirstName] = useState(currUser.firstName);
  const [lastName, setLastName] = useState(currUser.lastName);
  const [image, setImage] = useState(
    currUser.mainImg ? currUser.mainImg : noProfPic
  );
  const [streetNumber, setStreetNumber] = useState(currUser.streetNumber);
  const [streetName, setStreetName] = useState(currUser.streetName);
  const [city, setCity] = useState(currUser.city);
  const [country, setCountry] = useState(currUser.country);
  const [postalCode, setPostalCode] = useState(currUser.postalCode);

  // function getUserInfo() {
  //   console.log("getting info..");
  //   checkLoggedIn().then((response) => {
  //     console.log("has info...");
  //     const data = response.data.user[0];
  //     console.log(data);
  //     console.log(response.data.user[0]);
  //     console.log(response.data.loggedIn == true);
  //     if (response.data.loggedIn == true) {
  //       setFirstName(`${data.firstName}`);
  //       setLastName(`${data.lastName}`);
  //       setImage(`${data.mainIMG}`);
  //       setCity(`${data.city}`);
  //       setStreetNumber(`${data.number}`);
  //       setStreetName(`${data.street}`);
  //       setCountry(`${data.country}`);
  //       setPostalCode(`${data.postalCode}`);
  //     }
  //   });
  // }

  function checkInfo(infoName) {
    const text = infoName != "undefined" ? infoName : "";
    return text;
  }

  const toEditPage = () => {
    navigate("/account/edit");
  };

  const logout = (e) => {
    console.log("logging out..");
    axios.post("http://localhost:3001/logout");
    navigate("/");
  };

  function log() {
    console.log(user);
    console.log(image);
    console.log(noProfPic);
  }

  log();

  return (
    <Row>
      <Col>
        <Card className="cardBox mt-5 mb-5 pb-3" style={{ width: "20rem" }}>
          <Card.Img variant="top" style={{ height: "20rem" }} src={image} />
          <Card.Body>
            <Card.Title className="mb-3">My Account</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Logged in as {firstName} {lastName}
            </Card.Subtitle>
            <Card.Text className="mb-0">
              {checkInfo(streetNumber)} {checkInfo(streetName)}
            </Card.Text>
            <Card.Text className="mb-0">{checkInfo(city)}</Card.Text>
            <Card.Text className="mb-0">{checkInfo(country)}</Card.Text>
            <Card.Text className="mb-3">{checkInfo(postalCode)}</Card.Text>
            <div className="d-flex justify-content-between">
              <button
                className="btn mr-3 px-2 py-1 btn-outline-secondary"
                onClick={logout}
              >
                Log out
              </button>
              <button
                className="editBtn btn px-2 py-1 ml-3 btn-outline-secondary"
                onClick={toEditPage}
              >
                Edit Profile
              </button>
            </div>
          </Card.Body>
        </Card>
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

export default UserPage;
