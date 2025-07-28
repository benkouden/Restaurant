import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";
import Abouts from "./Pages/About";
import ServicesPage from "./Pages/Services";

const App = () => {
  return <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Toaster />
    </Router>;
  
};

export default App;
