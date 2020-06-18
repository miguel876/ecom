import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';

export default class Layout extends Component {
    render() {
        return (
            <layout>
              <Header />
              <Route path='/product/:id?' component={ProductDetail} exact />
              <Route path='/' component={Main} exact />
              <Footer />  
            </layout>
        ) 
    }
}
