import React, { Component } from 'react'
import Product from './Product.js';
import Masonry from 'react-masonry-css'
import store from '../../store.js';
import { SHOW_PRODUCTS } from '../../reducers/actionTypes.js';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           breakpointColumnsObj: {
            default: 2,
            500: 1
           },
        };
    }
    
    componentDidMount() {
        store.dispatch({
            type: SHOW_PRODUCTS
        });
        const getProductState = store.getState();

        getProductState.products
        .then((product) => { 
            this.setState({products:product, loading: true});
        })
        .catch((error) => { 
            console.log(error)
        })   
        
    }


    render() {
        return (
            <div className="container m-5">
                <div className="row">
                <Masonry
                breakpointCols={this.state.breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {
                        this.state.products.map((prod) => (
                            <Product 
                                key={prod.id}
                                prod={prod}
                            />
                        ))
                    }
                    </Masonry>
                </div>
            </div>
        )
    }
}
