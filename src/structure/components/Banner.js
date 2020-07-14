import React, { Component } from 'react'
import '../../styles/Banner.css'
import bannerImg from '../../resources/images/vladimir-kudinov-RKiMg1bwsMY-unsplash.jpg'


export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-container">
                    <img src={bannerImg} />
                </div>
                <div className="banner-gradient">
                <div className="banner-mask"></div>
                    <div className="container">
                        <div className="arrow-down-container">
                            <div className="arrow-down arrow-down-1"></div>
                            <div className="arrow-down arrow-down-2"></div>
                         
                        </div>
                        <div className="banner-logo-title"></div>
                        <div className="banner-title">Get your surf wallpapers</div>
                        <div className="banner-desc">Get all the surf and beach related wallpapers to print with the best prices and plans.</div>
                        <div className="btn-plans">
                            <div className="button"><span>Check our plans</span>
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="banner-logo"></div>
            </div>
        )
    }
}
