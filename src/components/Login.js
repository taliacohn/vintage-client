import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import userAPI from "../API/user";
import { UserContext } from "./UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const api = new userAPI();

  function login() {
    console.log("logging on...");
    api.login(email, password).then((result) => {
      console.log(result);
      alert("Welcome" + email)
        .then((result) => {
          navigate("/account/user");
        })
        .then((result) => {
          setUser({ result });
        })
        .catch((err) => {
          alert("User not found");
        });
    });
  }

  // preloadLogin().then((response) => {
  //   if (response.data.message) {
  //     setLoginStatus(response.data.message);
  //   } else {
  //     navigate("/account/user");
  //     setLoginStatus(`${response.data[0].email} is logged in`);
  //   } // only see the message with .data not whole object
  // });

  // const preloadLogin = (e) => {
  //   console.log("logging in..");
  //   return axios.post("http://localhost:3001/login", {
  //     email: email,
  //     password: password,
  //   });
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(`${response.data[0].email} is logged in`);
  //     }
  //   });
  // }, []);

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
