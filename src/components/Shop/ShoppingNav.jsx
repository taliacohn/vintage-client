import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";
import API from "../../API/products";
import { useState } from "react";

function ShoppingNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const api = new API();

  const handleSubmit = async (e) => {
    e.preventDefault();
    api.searchProducts(searchQuery).then((res) => setSearchResults(res));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-end" fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={setSearchQuery}
            // onChange={(event) => setSearchQuery(event.target.value)}
          />
          <Button variant="outline-success" onClick={handleSubmit}>
            <SearchIcon />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default ShoppingNav;
