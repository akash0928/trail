import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CustomerDashboard from './CustomerDashboard';


import CustomerLoginSignup from "./CustomerLoginSignup.jsx";
import VendorLoginSignup from "./VendorLoginSignup.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="customer" element={<CustomerLoginSignup />} />
          <Route path="vendor" element={<VendorLoginSignup />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);