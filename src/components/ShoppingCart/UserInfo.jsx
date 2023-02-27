import API from "../../API/cart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext.js";

export default function UserInfo(user) {
  const currUser = user.user;

  return (
    <div>
      <p className="mb-0">
        {currUser.firstName} {currUser.lastName}
      </p>
      <p className="mb-0">
        {currUser.streetNumber} {currUser.streetName}
      </p>
      <p className="mb-0">
        {currUser.city}, {currUser.country}
      </p>
      <p className="mb-0">{currUser.postalCode}</p>
    </div>
  );
}
