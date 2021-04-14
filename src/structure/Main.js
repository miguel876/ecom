import React, { Component } from 'react'
import Banner from './components/Banner'
import Search from './components/Search'
import ProductList from './components/ProductList'
import store from '../store.js';
import { GET_STATE } from '../reducers/actionTypes.js';

export default class Main extends Component {

    componentDidMount(){
        store.dispatch({
            type: GET_STATE,
            detail: false 
        });
    }
    
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
