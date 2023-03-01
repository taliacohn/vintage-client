import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { UserContext } from "../Contexts";
import EditInfo from "./EditInfo.jsx";

export default function EditPage() {
  const { user, setUser } = useContext(UserContext);
  const currUser = user.currUser;

  return (
    <Row>
      <Col className="titleMessage d-flex justify-content-center">
        Edit Account
      </Col>
      <Col className="me-5 mt-2 mb-5">
        <EditInfo user={currUser} setUser={setUser} />
      </Col>
    </Row>
  );
}
