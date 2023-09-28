import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/Landing";

export function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route path="" element={""} />
            <Route path="signin" element={""} />
            <Route path="forgotPassword" element={""} />
            <Route path="ResetPassword" element={""} />
          </Route>
        </Routes>
      </Router>
    );
}