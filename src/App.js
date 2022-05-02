import React from 'react';
import Home from "./component/Home";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"
import Footer from "./component/Footer";
import Testimonials from "./component/pages/Testimonials";
import Contact from "./component/pages/Contact";


const App = () => {
  return <div className="App">
    <div className="app-container">
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </div>;
}


export default App;
