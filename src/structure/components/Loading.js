import React, { Component } from 'react';
import Layout from '../../structure/Layout';
import '../../styles/Loading.css';
import store from '../../store.js';
import { COUNT_PRODUCTS } from '../../reducers/actionTypes.js';
import SmoothScroll from '../../smoothScrolling.js';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            loadingPercentage: 0,
            loadingStatePercentage: false,
            loadedImages: false,
            productsSize: 0,
        };
    }

    loadingPercentage = () =>{
        let load = 0;
       
        let interval = setInterval(() =>{
            this.setState({loadingPercentage: load});
            load ++;
            if(load === 101){
                clearInterval(interval);
                setTimeout(() =>{
                    this.setState({loadingStatePercentage: true})
                }, 1000)
            }
        }, 10)
    }  
 
    componentWillMount() {
        //Count the number of products
        store.dispatch({
            type: COUNT_PRODUCTS
        });

        //Get the products size first
        const getProductsSize = store.getState();
        this.setState({productsSize: getProductsSize.products});

        this.loadingPercentage(); 
    }

    componentDidMount() {
        //Check if the component is mount second
        this.setState({loadingState: true});
        
        const loadingImages = store.getState();
        
        //Check if the images are all loaded third
        store.subscribe(() => {
            if(loadingImages.images.images.length == this.state.productsSize){
                //If loaded turn down the loading page and add scroll to the page
                this.setState({loadedImages: true})

            }
        });
    }

    checkAllLoads = () => {
        //If all the images and component loads are finished, add scroll and smooth scroll
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
        new SmoothScroll(document,120,12);

        //Set session storage to prevent loading again on page refresh
        sessionStorage.setItem('loadedImages', 'true');
    }

    render() {
        if(!sessionStorage.getItem('loadedImages')){
            if(this.state.loadingState && this.state.loadingStatePercentage && this.state.loadedImages) this.checkAllLoads()
        }else{
            this.checkAllLoads()
        }
        
    return (
        <>
        {
        !sessionStorage.getItem('loadedImages') ?
            <div className="loading-container" style={{display: this.state.loadingState === true && this.state.loadingStatePercentage === true && this.state.loadedImages === true ? "none" : "block"}} >
                <div className="loading-cont">
                    <div className="loading-logo"></div>
                    <div className="loading-percentage">{this.state.loadingPercentage}%</div>
                </div>
            </div>
        :
        ""
        }
        
        <Layout /> 
        
        </>  
        
    );
    }
}
