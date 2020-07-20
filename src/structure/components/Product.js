import React, { Component } from 'react'
import '../../styles/Product.css'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€";

        const validateProd = (prd) =>{
            if(prd){
                return prd;
            }

            return false;
        }

        const {id, name, filename, description, price} = validateProd(this.props.prod);
    
        return (
            <div className="text-center">
                <Link to={`/product/${id}`}>
                    <div className="product-img">
                        <img src={imageSrc + filename} />
                        <div className="product-img-filter">
                            
                            <span>Click for more details</span>
                        </div>
                    </div>
                </Link>
                

            </div>
        )
    }
}
