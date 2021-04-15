import React, { Component } from 'react'
import '../../styles/ShoppingCart.css';
import store from '../../store.js';
import { REMOVE_CART } from '../../reducers/actionTypes.js';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
        };
    }

    componentDidMount(){
        store.subscribe(() => {
        const cartItems = store.getState();

            this.setState({ 
                cartItems: cartItems.cart.products,
                cartItemStyle: "cart-item-counter animation-cart",
                
            });
        });


    }

    deleteCartItem = (id) =>{
        store.dispatch({
            type: REMOVE_CART, 
            product_id: id
        });
    }

    
    render() {
        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€";

        return (
            <div className="cart-list-container">
                <div className="cart-list-triangle cart-list-triangle-shadow"></div>   
                <div className="cart-list-triangle"></div>    
                <div className="shopping-cart-list">
                { this.state.cartItems.length !== 0 ? 
                    <div>
                        {
                            this.state.cartItems.map((items)=> (
                                <div className="shopping-cart-list-item">
                                <div>
                                    <div className="item-left">
                                        <div className="item-image">
                                            <img src={imageSrc + items.filename} alt="Cart Product" />
                                        </div>
                                    </div>
                                    <div className="item-right">
                                        <div className="item-name">{items.name} <div className="cart-delete-item" onClick={() => this.deleteCartItem(items.id)}>x</div></div>
                                        <div className="item-price">{items.price + mainCurr}</div>
                                    </div>
                                    
                                </div>
                                </div>
                            ))
                        }
                        <div className="shopping-cart-list-button">
                            <button className="shopping-cart-list-finish">Finish Purchase</button>
                        </div>
                    </div>    
                    :
                    <div className="empty-cart-list">
                        Your shopping cart is empty
                    </div>
                }

                </div>
            </div>
        )
    }
}
