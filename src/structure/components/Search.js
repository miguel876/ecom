import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search'
import logoBW from '../../resources/logos/instagram_profile_image_bw.png'
import store from '../../store.js';
import { SHOW_PRODUCTS } from '../../reducers/actionTypes.js';
import LoadingComponents from './LoadingComponents';

export default class Search extends Component {
    //Get the redux state product list
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           productsSearch: [],
           typedSearch : false,
           loaded: false,
           typing: false,
        };
    }
    
    componentWillMount() {
        store.dispatch({type: SHOW_PRODUCTS});
        const getProductState = store.getState();
        
        this.setState({products: getProductState.products});

    }

    searchProducts = (typed) =>{
        this.setState({typing: true, loaded: true});
        if(typed){
            //Iterate the products array
            let prdArray = [];
            for(let prd of this.state.products){
                //Concat the name results
                let cleanName = prd.name.toLowerCase().replace(/\s/g, '');
                //Search for name and tags
                if(cleanName.includes(typed.target.value.toLowerCase())){
                    //Handle the list, add to state and rerender again
                    if(typed.target.value){
                        prdArray.push(prd);
                        this.setState({ productsSearch: prdArray, typedSearch: true });
                    }else{
                        this.setState({typedSearch: false, typing: false });
                    }
                }else{
                    //Show or hide the result box
                    !prdArray.length ?  this.setState({typedSearch: false }) :  this.setState({typedSearch: true});
                }
            }

        }

        this.setState({ loaded: false });
    }

    render() {
        const imageSrc = process.env.PUBLIC_URL + "/products/";
        const mainCurr = "€";

        return (
            <div className="col">
                <div className="water-logo">
                    <img src={logoBW} alt="Logo"></img>
                </div>
                <div className="search-container">
                    <div className="search-title">
                        Search for your image
                    </div>
                    <div className="search-box mt-4 mb-5">
                    {this.state.typedSearch}
                        <SearchIcon className="search-icon"/>
                        <input type="text" name="name" placeholder="Search" autoComplete="off" onChange={this.searchProducts}/>
                        { 
                            !this.state.loaded ?
                                this.state.typedSearch ?
                                <div className="search-box-results">
                                {
                                        this.state.productsSearch.map((item, key) => (
                                            <Link key={key} to={"/product/" + item.id}>
                                                <div className="search-result-tab">
                                                    <div className="search-prd-left">
                                                        <div className="search-prd-image"><img src={imageSrc + item.filename} alt="Product" /></div>
                                                    </div>
                                                    <div className="search-prd-right">
                                                        <div className="search-prd-right-1">
                                                            <div className="search-prd-name">{item.name}</div>
                                                            <div className="search-prd-desc">{item.description}</div>
                                                        </div>
                                                        <div className="search-prd-right-2">
                                                            <div className="search-prd-price">{item.price + mainCurr}</div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </Link>
                                        )) 
                                }
                                </div>
                            : 
                            this.state.typing ? 
                                <div className="search-box-results">
                                    <div className="search-empty">There are no results matching your search.</div>
                                </div> 
                            : ""

                        : 
                        <div className="search-box-results">
                            <LoadingComponents />
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
