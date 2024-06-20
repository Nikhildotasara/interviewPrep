import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routing/Home";
import About from "./routing/About";
import Contact from "./routing/Contact";

import Form from "./forms/form";

import CounterFile from "./counterFile";

import store from "./store/store";

import { Provider } from "react-redux";

import Index from "./revision/index.js";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Form</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<CounterFile />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </Router>
    // </Provider>

    <Index />
  );
};

export default App;
