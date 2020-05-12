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
                        <div className="banner-title">Get your surf pics</div>
                        <div className="banner-desc">Get all the surf and beach related pics with the best prices and plans.</div>
                        <div className="banner-text">Each week, our experts select a photo from our exclusive Signature collection and make it free to download, with free illustrations and video clips available monthly.<br />
                        </div>
                        <div className="btn-plans"><span>Check our plans</span></div>

                    </div>
                </div>
                
                <div className="banner-logo"></div>
            </div>
        )
    }
}
