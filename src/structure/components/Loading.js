import React, { Component } from 'react';
import Layout from '../../structure/Layout';
import '../../styles/Loading.css'

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            loadingPercentage: 0,
            loadingStatePercentage: false
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
        this.loadingPercentage(); 
    }

    componentDidMount() {
        this.setState({loadingState: true});
    }

    render() {
    return (
        
        this.state.loadingState === true && this.state.loadingStatePercentage === true ? 
        <Layout /> 
        : 
        <div className="loading-container">
            <div className="loading-cont">
                <div className="loading-logo"></div>
                <div className="loading-percentage">{this.state.loadingPercentage}%</div>
            </div>
        </div>
            
      
    );
    }
}
