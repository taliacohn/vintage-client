import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import userAPI from '../../API/user';

export default function SignUp() {
  const api = new userAPI();
  const navigate = useNavigate();
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [error, setError] = useState({});

  function register() {
    if (
      Object.keys(error).length ||
      firstNameReg === '' ||
      lastNameReg === '' ||
      emailReg === '' ||
      passwordReg === ''
    ) {
      Swal.fire({
        title: 'Complete All Sections Correctly',
        icon: 'warning',
      });
    } else {
      api
        .signup(firstNameReg, lastNameReg, emailReg, passwordReg)
        .then((response) => {
          Swal.fire({
            title: 'Sign up completed',
            text: 'Welcome ' + emailReg,
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/account/login');
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            title: 'Try Again!',
            text: 'Something went wrong',
            icon: 'warning',
            timer: 2000,
          });
        });
    }
  }

  const handlePasswordInput = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,17}$/;
    let password = document.getElementById('passwordControl');
    let passwordError;
    setPasswordReg(e.target.value);
    if (e.target.value === '') {
      passwordError = 'Password is required';
      password.textContent = passwordError;
      setError({ ...error, passwordError });
    } else if (!regex.test(e.target.value)) {
      console.log(e.target.value);
      console.log(regex.test(e.target.value));
      passwordError =
        'Password should be between 8 to 16 characters. Must contain one lowercase letter, one uppercase letter, and a number.';
      password.textContent = passwordError;
      setError({ ...error, passwordError });
    } else {
      password.textContent = '';
      delete error.passwordError;
    }
  };

  function handleEmailInput(e) {
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-z]{2,5}).{1,4}$/;
    let emailError;
    setEmailReg(e.target.value);
    let p = document.getElementById('emailControl');
    if (e.target.value === '') {
      emailError = 'Email is required';
      p.textContent = emailError;
      setError({ ...error, emailError });
    } else if (!regex.test(e.target.value)) {
      emailError = 'Incorrect email';
      p.textContent = emailError;
      setError({ ...error, emailError });
    } else {
      p.textContent = '';
      delete error.emailError;
    }
  }

  function handleFirstName(e) {
    let firstNameError;
    setFirstNameReg(e.target.value);
    let p = document.getElementById('firstNameControl');
    if (e.target.value === '') {
      firstNameError = 'First name is required';
      p.textContent = firstNameError;
      setError({ ...error, firstNameError });
    } else {
      p.textContent = '';
      delete error.firstNameError;
    }
  }

  function handleLastName(e) {
    let lastNameError;
    setLastNameReg(e.target.value);
    let p = document.getElementById('lastNameControl');
    if (e.target.value === '') {
      lastNameError = 'Last name is required';
      p.textContent = lastNameError;
      setError({ ...error, lastNameError });
    } else {
      p.textContent = '';
      delete error.lastNameError;
    }
  }

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
              onChange={handleFirstName}
            />
            <p
              id="firstNameControl"
              style={{ color: 'red', padding: '3px' }}
            ></p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              required
              onChange={handleLastName}
            />
            <p
              id="lastNameControl"
              style={{ color: 'red', padding: '3px' }}
            ></p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={handleEmailInput}
            />
            <p id="emailControl" style={{ color: 'red', padding: '3px' }}></p>
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
              onChange={handlePasswordInput}
            />
            <p
              id="passwordControl"
              style={{ color: 'red', padding: '3px' }}
            ></p>
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
