import { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  UserContext,
  WishlistContext,
  CartContext,
} from "./components/Contexts";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// APIs
import wishlistAPI from "./API/wishlist";
import cartAPI from "./API/cart";

// Components
import Home from "./components/Other/Home";
import About from "./components/Other/About";
import Login from "./components/UserProfile/Login";
import SignUp from "./components/UserProfile/SignUp";
import UserPage from "./components/UserProfile/UserPage";
import EditDetails from "./components/UserProfile/EditPage";
import NavBar from "./components/Other/NavBar";
import Footer from "./components/Other/Footer";
import Shop from "./components/Shop/Shop";
import Cart from "./components/ShoppingCart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import ProductDetails from "./components/Product/ProductDetails";
import Reset from "./components/ForgotPassword/Reset";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const wishlistApi = new wishlistAPI();
  const cartApi = new cartAPI();

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const cartValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  const wishlistValue = useMemo(
    () => ({ wishlist, setWishlist }),
    [wishlist, setWishlist]
  );

  useEffect(() => {
    if (user) {
      console.log(user);
      wishlistApi.getWishlist(user.currUser.id).then((res) => setWishlist(res));
      cartApi.getCartItems(user.currUser.id).then((res) => setCart(res));
    }
  }, [user]);

  return (
    <div className="App">
      <WishlistContext.Provider value={wishlistValue}>
        <CartContext.Provider value={cartValue}>
          <UserContext.Provider value={userValue}>
            <Router>
              <NavBar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/signup" element={<SignUp />} />
                <Route path="/account/user" element={<UserPage />} />
                <Route path="/account/wishlist" element={<Wishlist />} />
                <Route path="/account/edit" element={<EditDetails />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/account/cart" element={<Cart />} />
                <Route
                  path="/products/:id/:name"
                  element={<ProductDetails />}
                />
                <Route path="/account/reset" element={<Reset />} />
              </Routes>

              <Footer />
            </Router>
          </UserContext.Provider>
        </CartContext.Provider>
      </WishlistContext.Provider>
    </div>
  );
}

export default App;
