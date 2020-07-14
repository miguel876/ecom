import React from 'react';
import './App.css';
import Layout from './structure/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmoothScroll from './smoothScrolling.js';
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  new SmoothScroll(document,120,12);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>

    </BrowserRouter>
  );
}

export default App;
