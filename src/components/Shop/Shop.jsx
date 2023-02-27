import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import productAPI from "../../API/products";
import cartAPI from "../../API/cart";
import wishlistAPI from "../../API/wishlist";
import ShoppingNav from "./ShoppingNav";
import { useContext } from "react";
import { UserContext } from "../UserContext.js";

export default function Shop(props) {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { user } = useContext(UserContext);
  const productApi = new productAPI();
  const cartApi = new cartAPI();
  const wishlistApi = new wishlistAPI();

  useEffect(() => {
    productApi.getProducts(category).then((res) => setProducts(res));
  }, [category]);

  return (
    <div className="container mb-5">
      <ShoppingNav />
      <div className="row mt-2">
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              user={user}
              cartApi={cartApi}
              wishlistApi={wishlistApi}
              setWishlist={props.setWishlist}
              wishlist={props.wishlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
