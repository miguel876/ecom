import React, { Component } from 'react'
import '../../styles/ProductDetail.css';
import store from '../../store.js';
import { SHOW_PRODUCTS } from '../../reducers/actionTypes.js';

export default class ProductDetail extends Component {
    //Get the redux state product list
    constructor(props) {
        super(props);
        this.state = {
           products: [],
        };
    }
    
    componentWillMount() {
        store.dispatch({type: SHOW_PRODUCTS});
        const getProductState = store.getState();
        
        this.setState({products: getProductState.products});
        
    }

    sizePopulate = (size, mainSize) => {
        let sizeArr = [];

        for(let sizeItem of size){
            sizeArr.push("<option value="+sizeItem.size+">" + sizeItem.size + mainSize +"</option>"); 
        }
    
        return sizeArr;
    }

    render() {

        let {match:{params}} = this.props;
        let product = this.state.products.filter( p => p.id == params.id)[0];

        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€", mainSize = "cm";

        let {id, name, price, description, imageSize, filename, author} = product;
        
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-9">
                    <div className="product-image">
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

                            <div className="product-price text-right mt-4">
                                {price + mainCurr}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
