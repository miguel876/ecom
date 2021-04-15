import React from 'react';
import './App.css';
import Loading from './structure/components/Loading';
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
        <Loading />
        
      </div>

    </BrowserRouter>
  );
}

export default App;
