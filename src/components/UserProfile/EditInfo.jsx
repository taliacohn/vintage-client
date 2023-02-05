import Form from "react-bootstrap/Form";
import popUp from "../../alerts/popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../../API/user";

export default function EditInfo({ user, setUser }) {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [image, setMainImg] = useState(user.mainImg || "");
  const [streetNumber, setStreetNumber] = useState(user.streetNumber || "");
  const [streetName, setStreetName] = useState(user.streetName || "");
  const [city, setCity] = useState(user.setCity || "");
  const [country, setCountry] = useState(user.setCountry || "");
  const [postalCode, setPostalCode] = useState(user.setPostalCode || "");

  const navigate = useNavigate();
  const api = new userAPI();

  const handleCancel = () => {
    popUp(
      undefined,
      "Are you sure you want to cancel changes?",
      undefined,
      true,
      true,
      false,
      "Yes"
    ).then((res) => {
      if (res.isDenied) {
        navigate("/account/user");
      }
    });
  };

  const handleSave = async () => {
    try {
      const result = await api.updateUser(
        user.id,
        firstName,
        lastName,
        image,
        streetNumber,
        streetName,
        city,
        country,
        postalCode
      );

      if (result.status === 200) {
        popUp("success", "Profile Updated").then((result) => {
          if (result.isConfirmed) {
            user["firstName"] = firstName;
            user["lastName"] = lastName;
            user["mainImg"] = image;
            user["streetNumber"] = streetNumber;
            user["streetName"] = streetName;
            user["city"] = city;
            user["country"] = country;
            user["postalCode"] = postalCode;

            navigate("/account/user");
          }
        });
      } else {
        popUp("error", "Could not update profile");
      }
    } catch (error) {
      console.error(error);
      popUp("error", "Could not update profile");
    }
  };

  return (
    <Form className="loginFormPage mt-5 mb-3 w-75">
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName || ""}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="mainIMG">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
          className="mt-3"
          type="text"
          onChange={(e) => {
            setMainImg(e.target.value);
          }}
          value={image || ""}
        />
      </Form.Group>

      <h4 className="mb-3">Address:</h4>
      <Form.Group className="mb-3" controlId="streetNumber">
        <Form.Label>Street Number</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => {
            setStreetNumber(e.target.value);
          }}
          value={streetNumber || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="streetName">
        <Form.Label>Street Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setStreetName(e.target.value);
          }}
          value={streetName || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          value={country || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Postal Code">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          //   placeholder="Postal Code"
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
          value={postalCode || ""}
        />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <button
          className="loginBtn btn btn-outline-primary px-3"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="loginBtn btn btn-outline-primary px-3"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}
