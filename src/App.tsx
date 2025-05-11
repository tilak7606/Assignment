import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./components/Cart";
import Payment from "./components/Layouts/Payment";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        
         <Route path="/cart" element={<Cart/>} />
         <Route path="/payment" element={<Payment/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
