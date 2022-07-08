import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./Components/Checkout";


export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/out" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
  }