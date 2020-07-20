import React, { Component } from 'react'
import '../styles/Header.css'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ShoppingCart from '../structure/components/ShoopingCart.js'
import { Link, Route, matchPath } from 'react-router-dom'
import store from '../store.js';
import { SHOW_CART, GET_STATE } from '../reducers/actionTypes.js';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headerState: false,
          cartItems: [],
          cartItemStyle: "",
          cartVisibility: false
        };
    }
    
    componentDidMount() {
        store.subscribe(() => {
            const headerStateStore = store.getState();
            headerStateStore.header.headerState ? this.setState({ headerState: true }) : this.setState({ headerState: false });
        });

    }

    componentWillMount(){
        store.dispatch({
            type: SHOW_CART, 
        });

        store.subscribe(() => {
            const cartItems = store.getState();

            this.setState({ 
                cartItems: cartItems.cart.products,
                cartItemStyle: "cart-item-counter animation-cart",
                
            });

            //Let animation run and delete the animation class in order to restart
            let eraseClassAfterAnim = setTimeout(() => {
                this.setState({ 
                    cartItemStyle: "cart-item-counter",
                });
            }, 1000);

        });
    }

    showCart = () =>{
        this.setState({cartVisibility: !this.state.cartVisibility});
    }


    render() {
        return (
            <header className={this.state.headerState ? "detail" : ""}>            
            <div className="container d-flex">
                <div className="logo-container">
                    <Link to="/">  
                        <div className="logo"></div> 
                    </Link> 
                </div> 
                    <div className="business-area">
                        <div className={"shopping-area " + (this.state.cartVisibility ? 'visible' : 'hidden')} onClick={() => this.showCart()}>
                            <div className={this.state.cartItemStyle}>{this.state.cartItems.length}</div>
                            <LocalMallIcon className="shopping-cart" />
                            <ShoppingCart items={this.state.cartItems} />
                        </div>
                    </div>
                </div>  
            </header>
        )
    }
}
