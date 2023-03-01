import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import API from '../../API/forgot-password';
import popUp from '../../alerts/popup';

export default function Reset() {
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const api = new API();

  function handleSubmit() {
    console.log(emailReg);
    api
      .submitEmail(emailReg)
      .then((res) => popUp('success', 'Email Sent!'))
      .catch((error) => popUp('error', 'User does not exist!'));
  }

  return (
    <Row>
      <Col className="titleMessage d-flex justify-content-center">
        Forgot Password
      </Col>
      <Col className="me-5 mt-5">
        <Form className="loginFormPage mt-5 mb-3 w-75">
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
          </Form.Group>

          <button
            className="loginBtn btn btn-outline-primary"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Form>
      </Col>
    </Row>
  );
}
