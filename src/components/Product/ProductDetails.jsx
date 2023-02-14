import { useEffect, useState } from "react";
import API from "../../API/products";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(products.imgUrl);

  const api = new API();

  useEffect(() => {
    api.fetchProduct(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <div>
      {!product ? (
        <div>Loading...</div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={selectedImage}
                alt={product.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h2>₪{product.price}</h2>
              <button className="btn btn-primary mr-2"></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
