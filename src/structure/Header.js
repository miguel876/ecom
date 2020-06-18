import React, { Component } from 'react'
import '../styles/Header.css'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ShoppingCart from '../structure/components/ShoopingCart.js'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container d-flex">
                <Link to="/">  
                    <div className="logo"></div> 
                </Link>  
                    <div className="business-area">
                        <LocalMallIcon className="shopping-cart"/>
                        <ShoppingCart />
                    </div>
                </div>  
            </header>
        )
    }
}
