import { Col, Image, Row } from "react-bootstrap";

export default function ProductDetailsImages(props) {
  const handleImageClick = (imageURL) => {
    props.setSelectedImage(imageURL);
  };

  return (
    <Col>
      <Row xs={12} md={6}>
        <Col className="mt-3">
          {props.images.map((imageURL) => (
            <Row xs={3} key={imageURL}>
              <Image
                src={imageURL}
                fluid
                onClick={() => handleImageClick(imageURL)}
                style={{ width: "auto", height: "100px" }}
                className={`mr-3 mb-3 ${
                  props.selectedImage === imageURL
                    ? "border border-secondary rounded"
                    : ""
                }`}
              />
            </Row>
          ))}
        </Col>
        <Image
          src={props.selectedImage}
          style={{ height: "500px", width: "auto" }}
          fluid
        />
      </Row>
    </Col>
  );
}
