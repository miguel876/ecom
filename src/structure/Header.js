import React, { Component } from 'react'
import '../styles/Header.css'
import LocalMallIcon from '@material-ui/icons/LocalMall'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container d-flex">
                    <div className="logo"></div> 
                    <div className="business-area">
                        <LocalMallIcon className="shopping-cart"/>
                    </div>
                </div>  
            </header>
        )
    }
}
