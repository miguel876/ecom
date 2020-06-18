import React, { Component } from 'react'
import Product from './Product.js';
import store from '../../store.js';
import { SHOW_PRODUCTS } from '../../reducers/actionTypes.js';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: [],
        };
    }
    
    componentDidMount() {
        store.dispatch({type: SHOW_PRODUCTS});
        const getProductState = store.getState();
        
        this.setState({products: getProductState.products});
    }

    render() {
        return (
            <div className="container m-5">
                <div className="row">
                    {
                        this.state.products.map((prod) => (
                            <Product 
                                key={prod.id}
                                prod={prod}
                            />
                        ))
                    }
            
                </div>
            </div>
        )
    }
}
