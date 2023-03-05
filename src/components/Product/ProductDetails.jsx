import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

import API from '../../API/products';
import ProductDetailsImages from './ProductDetailsImages';
import { handleAddToCart, handleAddToWishlist } from '../../API/index';
import { UserContext } from '../Contexts';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductDetails(props) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const api = new API();

  const isInWishlist = props.wishlist.some((item) => item.productID === id);

  useEffect(() => {
    api.getOneProduct(id).then((res) => setProduct(res));
    if (product) {
      setSelectedImage(product.imgURLs[0]);
    }
  }, [id, product]);

  console.log('in product details');

  return (
    <div>
      {!product ? (
        <h1 className="d-flex justify-content-center mt-5 ">Loading...</h1>
      ) : (
        <Container className="mt-5">
          {console.log(product)}
          {console.log(location.state)}
          <Row className="pt-5 pb-5">
            <ProductDetailsImages
              selectedImage={selectedImage || product.imgURLs[0]}
              images={product.imgURLs}
              setSelectedImage={setSelectedImage}
              setSelectedImageUrl={setSelectedImageUrl}
              selectedImageUrl={selectedImageUrl || product.imgURLs[0]}
            />
            <Col xs={12} md={6}>
              <Card className="border-0" style={{ width: '500px' }}>
                <Card.Body>
                  <Card.Title
                    className="pb-3"
                    style={{ width: '400px', fontSize: '2rem' }}
                  >
                    {product.name}
                  </Card.Title>
                  <Card.Text
                    className="px-3 pb-4"
                    style={{ fontSize: '1.5rem' }}
                  >
                    ₪{product.price}
                  </Card.Text>
                  <div
                    className="d-flex justify-content-between mx-5"
                    style={{ width: '300px' }}
                  >
                    <Button
                      className="px-4"
                      variant="outline-secondary"
                      onClick={() =>
                        handleAddToWishlist(
                          isInWishlist,
                          user,
                          id,
                          props.setWishlist,
                          props.wishlist,
                          window.location.pathname,
                          navigate
                        )
                      }
                    >
                      {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="icon px-4"
                      onClick={() =>
                        handleAddToCart(
                          user,
                          window.location.pathname,
                          id,
                          navigate
                        )
                      }
                    >
                      <AddShoppingCartIcon />
                    </Button>
                  </div>
                  <Card.Title className="mt-5">Product Details</Card.Title>
                  <Card.Text className="pt-2">
                    {product.description
                      .split('.')
                      .filter(Boolean)
                      .map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
