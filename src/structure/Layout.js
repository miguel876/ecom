import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export default class Layout extends Component {
    render() {
        return (
            <layout>
              <Header />
              <Main />
              <Footer />  
            </layout>
        )
    }
}
