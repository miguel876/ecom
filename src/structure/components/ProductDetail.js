import React, { Component } from 'react'
import '../../styles/ProductDetail.css';
import store from '../../store.js';
import { SHOW_PRODUCTS, ADD_CART, SHOW_CART, GET_STATE } from '../../reducers/actionTypes.js';
import { languages } from '../../sources.js';

export default class ProductDetail extends Component {
    //Get the redux state product list
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           product: {}
        };
    }

    componentDidMount(){
        //Change header when inside a detail page
        store.dispatch({
            type: GET_STATE,
            detail: true
        });

        console.log(languages.imageSrc)
    }

    componentWillMount() {
        let {match:{params}} = this.props;

        store.dispatch({
            type: SHOW_PRODUCTS
        });

        const getProductState = store.getState();
  
        this.setState({
            products: getProductState.products, 
            product: getProductState.products.filter( p => p.id == params.id)[0]      
        });

        
        
    }

    addToCart = (product) =>{
        store.dispatch({
            type: ADD_CART, 
            product: product
        });

    }

    render() {

        const {id, name, price, description, imageSize, filename, author} = this.state.product;

        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€", mainSize = "cm"; 

        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-9">
                    <div className="product-image text-center">
                        <img src={imageSrc + filename} />
                    </div>
                    </div>
                    <div className="col-3">
                        <div className="product-detail-panel">
                            <div className="product-title">
                                {name}
                            </div>
                            <div className="product-author">
                                by, <span>{author}</span>
                            </div>
                            <div className="product-size-container mt-4">
                            <div>Pick the image size</div>
                            <select>
                               {imageSize.map((size, key) => {
                                   return <option key={key} value={size.size}> {size.size + mainSize} </option>
                               })}
                            </select>
                            </div>
                            <div className="product-description mt-4">
                                {description}
                            </div>
                            <div className="product-buy mt-4">
                               <button onClick={() => this.addToCart(this.state.product)}>Add to Cart</button>
                                <div className="product-price text-right">
                                    {price + mainCurr}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
