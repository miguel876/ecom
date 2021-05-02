import React, { Component } from 'react'
import '../../styles/Product.css'
import { Link } from 'react-router-dom';
import LoadingComponents from './LoadingComponents';
import store from '../../store.js';
import { IMAGE_LOADING, IMAGE_CHECK } from '../../reducers/actionTypes.js';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loaded: false,
        };
    }

    componentDidMount() {
        
    }

 

    render() {
        const imageSrc = process.env.PUBLIC_URL + "/products/";

        const loadedImage = () => {
            this.setState({ loaded: true });

            store.dispatch({
                type: IMAGE_LOADING,
                state: true
            });

        }

        const validateProd = (prd) =>{
            if(prd){
                return prd;
            }

            return false;
        }


        const {id, filename} = validateProd(this.props.prod);

        return (
            <>
                <div style={{display: !this.state.loaded ? "block" : "none"}}>
                    <LoadingComponents />
                </div>
                <div style={{display: this.state.loaded ? "block" : "none"}}>            
                    <div className="text-center">
                        <Link to={`/product/${id}`}>
                            <div className="product-img">
                                <img src={imageSrc + filename} alt="Product" onLoad={loadedImage}/>
                                <div className="product-img-filter">
                                    <span>Click for more details</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
