// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { checkLoggedIn } from "../API/checkUser.js";

// function EditDetails() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [image, setMainImg] = useState("");
//   const [streetNumber, setStreetNumber] = useState("");
//   const [streetName, setStreetName] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [postalCode, setPostalCode] = useState("");

//   const navigate = useNavigate();

//   //   function getInfo() {
//   //     checkLoggedIn().then((response) => {
//   //       if (response.data.loggedIn == true) {
//   //         const data = response.data.user[0];
//   //         console.log(data);
//   //         setFirstName(data.firstName);
//   //         setLastName(data.lastName);
//   //         setStreetNumber(data.number);
//   //         setStreetName(data.street);
//   //         setCity(data.city);
//   //         setCountry(data.country);
//   //         setPostalCode(data.postalCode);
//   //       }
//   //     });
//   //   }

//   const cancelEdit = () => {
//     navigate("/account/user");
//   };

//   const updateInfo = () => {
//     sendInfo().then((response) => {
//       console.log(response);
//       if (response.data.infoUpdated) {
//         navigate("/account/user");
//       } else {
//         console.log("something wrong..");
//       }
//     });
//   };

//   const sendInfo = () => {
//     console.log(firstName, lastName);
//     console.log(image);
//     return axios.post("http://localhost:3001/editInfo", {
//       firstName: firstName,
//       lastName: lastName,
//       streetNumber: streetNumber,
//       streetName: streetName,
//       city: city,
//       country: country,
//       postalCode: postalCode,
//       mainImg: image,
//     });
//   };

//   //   getInfo();

//   return (
//     <Row>
//       <Col className="titleMessage d-flex justify-content-center">
//         Edit Account
//       </Col>
//       <Col className="me-5 mt-2 mb-5">
//         <Form className="loginFormPage mt-5 mb-3 w-75">
//           <Form.Group className="mb-3" controlId="firstName">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="First Name"
//               onChange={(e) => {
//                 setFirstName(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="lastName">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Last Name"
//               onChange={(e) => {
//                 setLastName(e.target.value);
//               }}
//             />
//           </Form.Group>
//           {/* <Form.Group controlId="formFile" className="mb-3">
//             <Form.Label>Profile Picture</Form.Label>
//             <Form.Control type="file" />
//           </Form.Group> */}

//           <Form.Group className="mb-3" controlId="mainIMG">
//             <Form.Label>Profile Picture</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Picture URL"
//               onChange={(e) => {
//                 setMainImg(e.target.value);
//               }}
//             />
//           </Form.Group>

//           <h4 className="mb-3">Address:</h4>
//           <Form.Group className="mb-3" controlId="streetNumber">
//             <Form.Label>Street Number</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Street Number"
//               onChange={(e) => {
//                 setStreetNumber(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="streetName">
//             <Form.Label>Street Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Street Name"
//               onChange={(e) => {
//                 setStreetName(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="city">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="City"
//               onChange={(e) => {
//                 setCity(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="country">
//             <Form.Label>Country</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Country"
//               onChange={(e) => {
//                 setCountry(e.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="Postal Code">
//             <Form.Label>Postal Code</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Postal Code"
//               onChange={(e) => {
//                 setPostalCode(e.target.value);
//               }}
//             />
//           </Form.Group>

//           <div className="d-flex justify-content-between">
//             <button
//               className="loginBtn btn btn-outline-primary px-3"
//               type="button"
//               onClick={updateInfo}
//             >
//               Save
//             </button>
//             <button
//               className="loginBtn btn btn-outline-primary px-3"
//               type="button"
//               onClick={cancelEdit}
//             >
//               Cancel
//             </button>
//           </div>
//         </Form>
//       </Col>
//     </Row>
//   );
// }

// export default EditDetails;
