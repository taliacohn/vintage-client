import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";
import API from "../../API/products";
import { useState } from "react";
import popUp from "../../alerts/popup";

function ShoppingNav(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const api = new API();

  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .getSearchProducts(searchQuery)
      .then((res) => {
        setSearchQuery("");
        if (res.length > 0) {
          props.onSearchResults(res);
        } else {
          popUp(
            "error",
            "No matching products found",
            undefined,
            false,
            false,
            false,
            ""
          );
        }
      })
      .catch((error) => {
        popUp(
          "error",
          "No matching products found",
          undefined,
          false,
          false,
          false,
          ""
        );
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-end" fluid>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <Button variant="outline-success" type="submit">
            <SearchIcon />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default ShoppingNav;
