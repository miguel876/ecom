import React, { Component } from 'react'
import '../../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search'
import logoBW from '../../resources/logos/instagram_profile_image_bw.png'

export default class Search extends Component {
    render() {
        return (
            <div className="col">
                <div class="water-logo">
                    <img src={logoBW}></img>
                </div>
                <div className="search-container">
                    <div className="search-title">
                        Search for your image
                    </div>
                    <div className="search-box mt-4 mb-5">
                        <input type="text" name="name" placeholder="Search"/>
                        <SearchIcon className="search-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}
