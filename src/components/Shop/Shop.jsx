import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Product from "../Product/Product";
import API from "../../API/products";
import ShoppingNav from "./ShoppingNav";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const api = new API();

  useEffect(() => {
    api.getProducts(category).then((res) => setProducts(res));
  }, [category]);

  console.log(category);

  return (
    <div className="container">
      <ShoppingNav />
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
