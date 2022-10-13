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
import React, { useState } from "react";

function App() {

  const [state, setState] = useState({
    isLogin: false,
    isLoginUser: false,
    isLoginAdmin: false,

    user: {
      email: "user@mail.com",
      password: "",
    },

    admin: {
      email: "admin@mail.com",
      password: "",
    },
  });

  return (
      <Router>
        <Navigation state={state} setState={setState}/>
        <Routes>
          <Route path="/" element={<Page state={state} setState={setState}/>} />
          <Route path="/detail-restaurant" element={<Detail />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/profile-partner" element={<ProfilePartner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/edit-my-profile" element={<EditProfile />} />
          <Route path="/edit-profile-partner" element={<EditProfilePartner />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
  );
}

export default App;
