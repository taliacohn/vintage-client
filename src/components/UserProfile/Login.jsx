import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts";

import userAPI from "../../API/user";
import popUp from "../../alerts/popup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userApi = new userAPI();

  const { user, setUser } = useContext(UserContext);

  function login() {
    userApi
      .login(email, password)
      .then((result) => {
        popUp("success", "Login Successful", "Welcome " + email).then((res) => {
          if (res.isConfirmed) {
            console.log("confirmed login");
            console.log(result);
            const currUser = result.data.user;
            console.log(currUser);
            setUser({ currUser });
            const redirectPath =
              sessionStorage.getItem("redirectPath") || "/account/user";
            sessionStorage.removeItem("redirectPath");
            navigate(redirectPath);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error is: " + error.response.data.message);
        popUp("error", "Login Unsuccessful", error.response.data.message);
      });
  }

  return (
    <Row>
      <Col className="titleMessage d-flex justify-content-center">Login</Col>
      <Col className="me-5 mt-5">
        <Form className="loginFormPage mt-5 mb-3 w-75">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <button
            className="loginBtn btn btn-outline-primary"
            type="button"
            onClick={login}
          >
            Login
          </button>
        </Form>
        <div className="d-flex mt-4 justify-content-between">
          <Col>
            <Link className="loginQuestion" to="/account/signup">
              Create Account
            </Link>
          </Col>
          <Col>
            <Link className="loginQuestion" to="/account/signup">
              Forgot Password?
            </Link>
          </Col>
        </div>
      </Col>
    </Row>
  );
}
