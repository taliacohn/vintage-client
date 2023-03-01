import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import productAPI from "../../API/products";
import ShoppingNav from "./ShoppingNav";
import { useContext } from "react";
import { WishlistContext, UserContext, CartContext } from "../Contexts";

export default function Shop(props) {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { category } = useParams();
  const { user } = useContext(UserContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);
  const productApi = new productAPI();

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
              setWishlist={setWishlist}
              wishlist={wishlist}
              cart={cart}
              setCart={setCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
