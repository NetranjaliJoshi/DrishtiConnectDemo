import React from "react";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Volunter from "./pages/Volunter";
import VolunteerRegister from "./pages/VolunteerRegister";
import VolunteerLogin from "./pages/VolunteerLogin";
import Footer from "./pages/Footer";

const MyRoutingComp = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Routes>
            {" "}
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="community" element={<Community />}></Route>
            {/* <Route path="/volunteer" element={<Volunter />}></Route> */}
            <Route
              path="volunteerRegister"
              element={<VolunteerRegister />}
            ></Route>
            <Route path="volunterLogin" element={<VolunteerLogin />}></Route>
            <Route path="aboutus" element={<About />}></Route>
            <Route path="contactus" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
};

export default MyRoutingComp;
