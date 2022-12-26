import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import EditDetails from "./components/EditDetails";
import Clothing from "./components/Clothing";
import Shoes from "./components/Shoes";
import Accessories from "./components/Accessories";
import HomeDecor from "./components/HomeDecor";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="/account/user" element={<UserPage />} />
          <Route path="/account/edit" element={<EditDetails />} />
          <Route path="/products/clothes" element={<Clothing />} />
          <Route path="/products/shoes" element={<Shoes />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/homedecor" element={<HomeDecor />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
