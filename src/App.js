import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cover from './components/Cover';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Testimonials from "./components/Testimonials.js";
import Services from './components/Services'
import Meet from './components/meet'
import Footers from './components/footer'
import Accordion from './components/Accordion';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Cover/>} />
        <Route path = "*" element = {<Cover/>}/>
      </Routes>
      <Services/>
      <Meet/>
      <Testimonials/>
     <Accordion/>
     <Footers/>
      </BrowserRouter>
  );
}

export default App;
