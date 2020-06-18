import React, { Component } from 'react'
import Banner from './components/Banner'
import Search from './components/Search'
import ProductList from './components/ProductList'
import { Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="container mt-4">
                    <div className="row">
                        <Search />
                    </div>
                    <div className="row">
                        <ProductList />
                    </div>
                </div>
            </div>
        )
    }
}
