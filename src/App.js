import React from 'react';
import './App.css';
import Layout from './structure/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>

    </BrowserRouter>
  );
}

export default App;
