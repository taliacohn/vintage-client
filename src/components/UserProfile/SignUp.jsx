import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import userAPI from "../../API/user";

export default function SignUp() {
  const api = new userAPI();
  const navigate = useNavigate();
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [error, setError] = useState({});

  function register() {
    if (
      Object.keys(error).length ||
      firstNameReg === "" ||
      lastNameReg === "" ||
      emailReg === "" ||
      passwordReg === ""
    ) {
      Swal.fire({
        title: "Complete All Sections",
        icon: "warning",
      });
    } else {
      api
        .signup(firstNameReg, lastNameReg, emailReg, passwordReg)
        .then((response) => {
          Swal.fire({
            title: "Sign up completed",
            text: "Welcome " + emailReg,
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/account/login");
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Try Again!",
            text: "Something went wrong",
            icon: "warning",
            timer: 2000,
          });
        });
    }
  }

  //   console.log("registering..");
  //   // axios.get("http://localhost:3001/user").then((response) => {
  //   //   console.log(response.data);
  //   // });
  //   api
  //     .register(firstNameReg, lastNameReg, emailReg, passwordReg)
  //     .then((response, err) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         navigate("/account/login");
  //         console.log(response);
  //       }
  //     });
  // }

  return (
    <Row>
      <Col className="titleMessage d-flex justify-content-center">
        Create Account
      </Col>
      <Col className="me-5 mt-5">
        <Form className="loginFormPage mt-5 mb-3 w-75">
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              required
              onChange={(e) => {
                setFirstNameReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => {
                setLastNameReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmailReg(e.target.value);
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
                setPasswordReg(e.target.value);
              }}
            />
          </Form.Group>

          <button
            className="loginBtn btn btn-outline-primary"
            type="button"
            onClick={register}
          >
            Create
          </button>
        </Form>
      </Col>
    </Row>
  );
}
