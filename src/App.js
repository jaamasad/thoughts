import React, {useState} from "react"
import Home from "./component/Home"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Footer from "./component/Footer"
import Testimonials from "./component/pages/Testimonials"
import Contact from "./component/pages/Contact"

const App = () => {
  const [show, setShow]=useState(false)
  return (
    <div className="App">
      <div className="app-container">
        <div className="home-btn">
          <a href="/">
            <img src="/images/home.svg" alt="" />
          </a>
        </div>
        <div className="toggle-menu" onClick={()=>setShow(!show)}><img src="/images/bars.svg" alt="" /></div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home show={show} />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
