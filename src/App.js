import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShippingInfo from "./component/ShippingInfo.js"
import PaymentInfo from "./component/PaymentInfo.js"
import OrderSuccess from "./component/OrderSuccess.js"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShippingInfo />} />
        <Route exact path="/payment" element={<PaymentInfo />} />
        <Route exact path="/success" element={<OrderSuccess />} />
      </Routes>
    </Router>

  );
}

export default App;
