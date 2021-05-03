import React, { Component } from 'react'
import '../../styles/ProductDetail.css';
import store from '../../store.js';
import { SHOW_PRODUCTS, ADD_CART, GET_STATE } from '../../reducers/actionTypes.js';

export default class ProductDetail extends Component {
    //Get the redux state product list
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           product: {},
           insideHover: false,
        };
    }

    componentDidMount(){
        //Change header when inside a detail page
        store.dispatch({
            type: GET_STATE,
            detail: true
        });

        this.addToCartButtonAnimation();

        console.log(store.getState());
    }

    componentWillMount() {
        let {match:{params}} = this.props;

        store.dispatch({
            type: SHOW_PRODUCTS
        });

        const getProductState = store.getState();

        getProductState.products
            .then((products) => { 
                this.setState({
                    products: products, 
                    product: products.filter( p => p.id == params.id)[0]      
                });
            })
            .catch((error) => { console.log(error)})
        
    }

    sizeSelect = () => {
        const selectBox = document.querySelector("ul.product-select");

        if(selectBox.classList.contains("opened")){
            selectBox.classList.remove("opened");
            selectBox.classList.add("closed");
        }else{
            if(selectBox.classList.contains("closed")){
                selectBox.classList.remove("closed");
            }
            selectBox.classList.add("opened");
        }
    }

    sizeSelectValue = function(val){
        const selectBoxFirst = document.querySelector("ul.product-select li:first-child");
        selectBoxFirst.innerHTML = val + "cm";
    }

    addToCart = (product) =>{
        store.dispatch({
            type: ADD_CART, 
            product: product
        });

    }

    addToCartButtonAnimation = () => {
        const addCartBtn = document.querySelector(".product-detail-panel .product-buy button");

        addCartBtn.onmouseover = () => {
            this.setState({ insideHover: true });

            addCartBtn.classList.add("prod-btn-in");
            addCartBtn.classList.add("prod-btn-end") 

            if(addCartBtn.classList.contains("prod-btn-out")) {addCartBtn.classList.remove("prod-btn-out")};

            addCartBtn.onanimationend = () =>{
                if(this.state.insideHover) {
                    addCartBtn.classList.add("prod-btn-end-end"); 
                }
            }; 
        }

        addCartBtn.onmouseleave = () => {
            this.setState({ insideHover: false });
            addCartBtn.classList.add("prod-btn-out");
            addCartBtn.onanimationend = () =>{
                    addCartBtn.classList.remove("prod-btn-end-end"); 
                    addCartBtn.classList.remove("prod-btn-end");
                    addCartBtn.classList.remove("prod-btn-in");
            }; 
        }
    }

    render() {
        const {id, name, price, description, imageSize, filename, author} = this.state.product;

        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€", mainSize = "cm"; 

        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-9">
                    <div className="product-image text-center">
                        <img src={imageSrc + filename} alt="Product Detail" />
                    </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="product-detail-panel">
                            <div className="product-title">
                                {name}
                            </div>
                            <div className="product-author">
                                by, <span>{author}</span>
                            </div>
                            <div className="product-size-container mt-4">
                            <div>Pick the image size</div>
                            <ul className="product-select" onClick={this.sizeSelect}>
                                <li>Selecione um tamanho:</li>
                                {
                                    (imageSize) ?
                                    imageSize.map((size, key) => {
                                    return <li onClick={()=>{this.sizeSelectValue(size.size)}} key={key} value={size.size}> {size.size + mainSize} </li>
                                })
                                
                                : 
                                <li> There are no sizes available.</li>
                                }
                            </ul>
                            </div>
                            <div className="product-description mt-4">
                                {description}
                            </div>
                            <div className="product-buy mt-4">
                                <button onClick={() => this.addToCart(this.state.product)}>
                                    <div className="prod-btn"></div>
                                    <div id="container-wave">
                                        <div className="wave"></div>
                                    </div>
                                    <div className="product-buy-text">Add to Cart</div>
                                </button>
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
