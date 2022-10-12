import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/NavBar";
import Page from "./components/LandingPage";
import Detail from "./components/DetailRest";
import Profile from "./components/Profile";
import ProfilePartner from "./components/ProfilePartner";
import Cart from "./components/CartOrder";
import EditProfile from "./components/Edit Profile";
import EditProfilePartner from "./components/Edit ProfilePartner";
import AddProduct from "./components/Add Product";
import Transaction from "./components/IncomeTransaction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/detail-restaurant" element={<Detail />} />
          <Route exact path="/my-profile" element={<Profile />} />
          <Route exact path="/profile-partner" element={<ProfilePartner />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/edit-my-profile" element={<EditProfile />} />
          <Route exact path="/edit-profile-partner" element={<EditProfilePartner />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
