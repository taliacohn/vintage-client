import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContext";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/UserProfile/Login";
import SignUp from "./components/UserProfile/SignUp";
import UserPage from "./components/UserProfile/UserPage";
import EditDetails from "./components/UserProfile/EditPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";
import Cart from "./components/ShoppingCart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  console.log(wishlist);

  return (
    <div className="App">
      <UserContext.Provider value={userValue}>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/signup" element={<SignUp />} />
            <Route
              path="/account/user"
              element={<UserPage setWishlist={setWishlist} />}
            />
            <Route
              path="/account/wishlist"
              element={
                <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
              }
            />
            <Route path="/account/edit" element={<EditDetails />} />
            <Route
              path="/shop/:category"
              element={<Shop wishlist={wishlist} setWishlist={setWishlist} />}
            />
            <Route
              path="/account/cart"
              element={<Cart wishlist={wishlist} setWishlist={setWishlist} />}
            />
            <Route
              path="/products/:id/:name"
              element={
                <ProductDetails wishlist={wishlist} setWishlist={setWishlist} />
              }
            />
          </Routes>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
