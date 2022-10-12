import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Page from "./components/LandingPage";
import Detail from "./components/DetailRest";
import Profile from "./components/Profile";
import ProfilePartner from "./components/ProfilePartner";
import Cart from "./components/CartOrder";
import EditProfile from "./components/Edit Profile";
import EditProfilePartner from "./components/Edit ProfilePartner";
import AddProduct from "./components/Add Product";
import Transaction from "./components/IncomeTransaction";

function App() {
  return (
    <div>
      <ProfilePartner />
    </div>
  );
}

export default App;
