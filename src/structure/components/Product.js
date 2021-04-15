import React, { Component } from 'react'
import '../../styles/Product.css'
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const imageSrc = process.env.PUBLIC_URL + "/products/";

        const validateProd = (prd) =>{
            if(prd){
                return prd;
            }

            return false;
        }

        const {id, filename } = validateProd(this.props.prod);
    
        return (
            <div className="text-center">
                <Link to={`/product/${id}`}>
                    <div className="product-img">
                        <img src={imageSrc + filename} alt="Product"/>
                        <div className="product-img-filter">
                            
                            <span>Click for more details</span>
                        </div>
                    </div>
                </Link>
                

            </div>
        )
    }
}
