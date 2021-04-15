import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';

export default class Layout extends Component {
    
    render() {
        return (
            <>
              <Header />
              <Route path='/product/:id?' component={ProductDetail} exact render={(props) => <ProductDetail {...props} title={`Props through render`} />}/>
              <Route path='/' component={Main} exact />
              <Footer />  
            </>
        ) 
    }
}
