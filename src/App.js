import { Routes, Route, useLocation, useParams } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import "./styles/app.scss";
import AOS from "aos";
import NoAuthHeader from "./components/NoAuthHeader";
import AuthHeader from "./components/AuthHeader";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux";
import Plans from "./Pages/Plans";
import AboutUs from "./Pages/AboutUs";
import Experts from "./Pages/Experts";
import Profile from "./Pages/Profile";
import ExpertAdmin from "./Pages/ExpertAdmin";
import Inquiry from "./Pages/Inquiry";
import ExpertAdminHeader from "./components/ExpertAdminHeader";
import CheckoutForm from "./Pages/CheckoutForm ";

const App = () => {
  AOS.init({ once: true });
  const status = useSelector((state) => state.auth.status);
  const location = useLocation();
  const isExpertAdminPage = location.pathname.includes("/addexpert");
  return (
    <div>
      {isExpertAdminPage ? (
        <ExpertAdminHeader/>
      ) : status === "Successful" ? (
        <AuthHeader />
      ) : (
        <NoAuthHeader />
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/Checkoutform">
          <Route path=":planName/:sessionCount" element={<CheckoutForm />} />
        </Route>
        <Route path="/experts" element={<Experts />} />
        <Route path="/addexpert" element={<ExpertAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
