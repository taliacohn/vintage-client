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
import Clothing from "./components/Clothing";
import Shoes from "./components/Shoes";
import Accessories from "./components/Accessories";
import HomeDecor from "./components/HomeDecor";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";

function App() {
  const [user, setUser] = useState(null);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

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
            <Route path="/account/user" element={<UserPage />} />
            <Route path="/account/edit" element={<EditDetails />} />
            <Route path="/shop/:category" element={<Shop />} />
            {/* <Route path="/products/clothes" element={<Clothing />} />
            <Route path="/products/shoes" element={<Shoes />} />
            <Route path="/products/accessories" element={<Accessories />} />
            <Route path="/products/homedecor" element={<HomeDecor />} /> */}
          </Routes>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
