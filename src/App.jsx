import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
import Doctors from "./Doctors";
import ScrollToTop from "./ScrollToTop";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "./Account";
import PrivateRoute from "./PrivateRoute";
import News from "./News";
import AuthForm from "./AuthForm";
import Promotions from "./Promotions";
import OnlineRequest from "./OnlineRequest";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/hospital" element={<Home />}></Route>
        <Route path="/hospital/about" element={<About />}></Route>
        <Route path="/hospital/services" element={<Services />}></Route>
        <Route path="/hospital/doctors" element={<Doctors />}></Route>
        <Route path="/hospital/contact" element={<Contact />}></Route>
        <Route path="/hospital/auth" element={<AuthForm />}></Route>
        <Route path="/hospital/promotions" element={<Promotions />}></Route>

        {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/log-in" element={<Login />}></Route> */}
        <Route
          path="/hospital/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/hospital/news" element={<News />}></Route>
        <Route path="/hospital/online-request" element={<OnlineRequest />}></Route>
      </Routes>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
