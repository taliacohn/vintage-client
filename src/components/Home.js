import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container fluid>
      <Row className="even-box">
        <Col>
          <Stack className="titleGroup" gap={3}>
            <div className="title">Clothes</div>
            <Link to="/products/clothes">
              <div className="shopNow">Shop Now</div>
            </Link>
          </Stack>
        </Col>
        <Col className="clothes" xs={9}></Col>
      </Row>

      <Row className="odd-box">
        <Col className="shoes" xs={9}></Col>
        <Col>
          <Stack className="titleGroup" gap={3}>
            <div className="title">Shoes</div>
            <Link to="/products/shoes">
              <div className="shopNow">Shop Now</div>
            </Link>
          </Stack>
        </Col>
      </Row>

      <Row className="even-box ">
        <Col>
          <Stack className="titleGroup" gap={3}>
            <div className="title">Accessories</div>
            <Link to="/products/accessories">
              <div className="shopNow">Shop Now</div>
            </Link>
          </Stack>
        </Col>
        <Col className="accessories" xs={9}></Col>
      </Row>

      <Row className="odd-box">
        <Col className="home-decor" xs={9}></Col>
        <Col>
          <Stack className="titleGroup" gap={3}>
            <div className="title">Home Decor</div>
            <Link to="/products/homedecor">
              <div className="shopNow">Shop Now</div>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
