import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pic from "./images/Talia-Cohn-Headshot.JPG";

function About() {
  const noProfPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Row className="d-flex">
      <Col className="d-flex justify-content-center mt-5">
        <img
          className="pic m-5"
          src={Pic}
          style={{ width: "25rem", height: "35rem" }}
        ></img>
      </Col>
      <Col>
        <Card className="orderHistoryCard mt-5 mb-5" style={{ width: "40rem" }}>
          <Card.Body>
            <Card.Title className="mb-4">About Second Love Vintage</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper faucibus neque, sed commodo est consectetur in.
              Vestibulum dictum in dui nec laoreet. Mauris vel tellus vulputate,
              malesuada ipsum non, sollicitudin sapien. Cras at lorem nec dui
              blandit rhoncus elementum et lectus. Nunc vitae ante nec augue
              laoreet pulvinar. Praesent sed purus scelerisque, faucibus purus
              sed, aliquam lorem. Integer pretium, metus in vestibulum accumsan,
              risus tellus fringilla tortor, in malesuada massa purus at dolor.
              Sed eget semper magna. Sed et iaculis turpis. Ut ac accumsan
              lorem. Integer congue nunc non dui accumsan sollicitudin. Nullam
              sollicitudin, leo vitae mattis vulputate, neque nunc vehicula
              odio, vitae sollicitudin sapien diam vitae ligula. Vestibulum ac
              pellentesque turpis. Vestibulum pellentesque neque id turpis
              auctor iaculis. Proin rutrum, augue quis varius fringilla, dolor
              ipsum gravida diam, non pellentesque arcu magna vitae urna.
              Quisque iaculis nulla dolor, quis hendrerit leo egestas sit amet.
            </Card.Text>
            <Card.Title className="pt-3 mb-4">About CEO</Card.Title>
            <Card.Text className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper faucibus neque, sed commodo est consectetur in.
              Vestibulum dictum in dui nec laoreet. Mauris vel tellus vulputate,
              malesuada ipsum non, sollicitudin sapien. Cras at lorem nec dui
              blandit rhoncus elementum et lectus. Nunc vitae ante nec augue
              laoreet pulvinar. Praesent sed purus scelerisque, faucibus purus
              sed, aliquam lorem. Integer pretium, metus in vestibulum accumsan,
              risus tellus fringilla tortor, in malesuada massa purus at dolor.
              Sed eget semper magna. Sed et iaculis turpis. Ut ac accumsan
              lorem. Integer congue nunc non dui accumsan sollicitudin. Nullam
              sollicitudin, leo vitae mattis vulputate, neque nunc vehicula
              odio, vitae sollicitudin sapien diam vitae ligula. Vestibulum ac
              pellentesque turpis. Vestibulum pellentesque neque id turpis
              auctor iaculis. Proin rutrum, augue quis varius fringilla, dolor
              ipsum gravida diam, non pellentesque arcu magna vitae urna.
              Quisque iaculis nulla dolor, quis hendrerit leo egestas sit amet.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default About;
