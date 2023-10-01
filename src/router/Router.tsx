import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/Landing";
import { BuyPin } from "../components/buyPin";
import { Login } from "../components/Login";
import { ProvidePersonalDetails } from "../components/buyPin/GhanaianStudent/personalDetails";
import { Payment } from "../components/buyPin/GhanaianStudent/payments";
import { Successful } from "../components/buyPin/credentials";
import { Student } from "../pages/student";
import { Instructions } from "../components/studentApplication/instructions";
import { GeneralInfo } from "../components/studentApplication/generalInfo";

export function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route path="" element={<Login/>} />
            <Route path="buy-pin" element={<BuyPin />} >
              <Route path="" element={<ProvidePersonalDetails />} />
              <Route path="payment" element={<Payment /> } />
              <Route path="successful" element={<Successful /> } />
            </Route>
          </Route>
          <Route path="/student" element={<Student />} >
            <Route path="" element={<Instructions /> } />
            <Route path="general-info" element={<GeneralInfo />} />
            </Route>
        </Routes>
      </Router>
    );
}