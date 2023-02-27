import { useEffect, useState } from "react";
import API from "../../API/products";

export default function ProductDetails({ id, location, imgURL }) {
  const { isInWishlist, handleAddToWishlist } = location.state || {};
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(imgURL);

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

import React, { useState } from "react";

const ProductDetailsPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.imgURL);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/api/products/${match.params.id}`
      );
      const product = await response.json();
      setProduct(product);
    };

    fetchProduct();
  }, [match.params.id]);

  const [selectedImage, setSelectedImage] = useState(product.imgURL);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={selectedImage} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button className="btn btn-primary mr-2">Add to Wishlist</button>
          <button className="btn btn-primary">Add to Cart</button>
          <hr />
          <div className="row">
            {product.images.map((image) => (
              <div className="col-3" key={image}>
                <img
                  src={image}
                  alt={product.name}
                  className="img-fluid"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
