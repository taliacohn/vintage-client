import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

import UserData from "./UserData";
import API from "../../API/user";
import popUp from "../../alerts/popup";

export default function UserCard({ user, setUser }) {
  const noProfPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const api = new API();
  const navigate = useNavigate();

  function handleLogOut() {
    popUp(
      undefined,
      "Are you sure you want to log out?",
      undefined,
      true,
      true,
      false,
      "Log Out"
    ).then((res) => {
      if (res.isDenied) {
        api.logout();
        popUp(undefined, "Log out successful").then(() => {
          api
            .logout()
            .then(() => navigate("/"))
            .then(() => setUser(null));
        });
      }
    });
  }

  const toEditPage = () => {
    navigate("/account/edit");
  };

  return (
    <Row>
      <Col>
        <Card className="cardBox mt-5 mb-5 pb-3" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "20rem" }}
            src={user.mainImg || noProfPic}
          />
          <Card.Body>
            <UserData user={user} />
            <div className="d-flex justify-content-between">
              <button
                className="editBtn btn px-2 py-1 ml-3 btn-outline-secondary"
                onClick={toEditPage}
              >
                Edit Profile
              </button>
              <button
                className="btn mr-3 px-2 py-1 btn-outline-secondary"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
