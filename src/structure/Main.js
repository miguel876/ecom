import React, { Component } from 'react'
import Banner from './components/Banner'
import Search from './components/Search'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="container mt-4">
                    <div className="row">
                        <Search />
                    </div>
                </div>
            </div>
        )
    }
}
