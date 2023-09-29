import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/Landing";
import { BuyPin } from "../components/buyPin";
import { Login } from "../components/Login";
import { ProvidePersonalDetails } from "../components/buyPin/GhanaianStudent/personalDetails";
import { Payment } from "../components/buyPin/GhanaianStudent/payments";

export function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route path="" element={<Login/>} />
            <Route path="buy-pin" element={<BuyPin />} >
              <Route path="" element={<ProvidePersonalDetails />} />
              <Route path="payment" element={<Payment /> } />
            </Route>
            <Route path="forgotPassword" element={""} />
            <Route path="ResetPassword" element={""} />
          </Route>
        </Routes>
      </Router>
    );
}