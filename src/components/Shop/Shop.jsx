import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import productAPI from "../../API/products";
import wishlistAPI from "../../API/wishlist";
import cartAPI from "../../API/cart";
import ShoppingNav from "./ShoppingNav";
import { useContext } from "react";
import { UserContext } from "../UserContext.js";

export default function Shop(props) {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { category } = useParams();
  const { user } = useContext(UserContext);
  const productApi = new productAPI();
  const wishlistApi = new wishlistAPI();
  const cartApi = new cartAPI();

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      setProducts(searchResults);
    } else {
      productApi.getProducts(category).then((res) => setProducts(res));
    }
  }, [category, searchResults]);

  return (
    <div className="container mb-5">
      <ShoppingNav onSearchResults={handleSearchResults} />
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
