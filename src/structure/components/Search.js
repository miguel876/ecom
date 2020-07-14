import React, { Component } from 'react'
import '../../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search'
import logoBW from '../../resources/logos/instagram_profile_image_bw.png'
import store from '../../store.js';
import { SHOW_PRODUCTS } from '../../reducers/actionTypes.js';

export default class Search extends Component {
    //Get the redux state product list
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           productsSearch: [],
        };
    }
    
    componentWillMount() {
        store.dispatch({type: SHOW_PRODUCTS});
        const getProductState = store.getState();
        
        this.setState({products: getProductState.products});
    }

    searchProducts = (typed) =>{
        if(typed){
            //Iterate the products array
            let prdArray = [];
            for(let prd of this.state.products){
                //Concat the name results
                let cleanName = prd.name.toLowerCase().replace(/\s/g, '');
                
                //Search for name and tags
                if(cleanName.includes(typed.target.value)){
                   //Handle the list, add to state and rerender again, no need for a new a component
                   prdArray.push(prd);
                   this.setState({ productsSearch: prdArray });
                   console.log(this.state.productsSearch);

                }
            }
        }
    }

    buildSearchBox = (product) =>{
        
    }

    render() {
        return (
            <div className="col">
                <div className="water-logo">
                    <img src={logoBW}></img>
                </div>
                <div className="search-container">
                    <div className="search-title">
                        Search for your image
                    </div>
                    <div className="search-box mt-4 mb-5">
                        <SearchIcon className="search-icon"/>
                        <input type="text" name="name" placeholder="Search" autoComplete="off" onChange={this.searchProducts}/>
                        <div className="search-box-results">
                        {
                            this.state.productsSearch.map((item, key) => (
                                <div className="search-result-tab">{item.name}</div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
