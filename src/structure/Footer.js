import React, { Component } from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col footer-social">
                        <Link to="#!"><FacebookIcon className="footer-icon"/></Link>
                        <Link to="#!"><LinkedInIcon className="footer-icon"/></Link>
                        <Link to="#!"><TwitterIcon className="footer-icon"/></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center footer-contacts pt-4">
                            <div className="logo-footer"></div>
                            <div className="">For more info please contact</div>
                            <div className="font-14">
                                <a className="hover" href="tel:+351 961234567">
                                    +351 961234567
                                </a>
                            </div>
                            <div className="">
                                <a className="hover" href="mailto:geral@pic.vault.com">
                                    geral@pic.vault.com
                                </a>
                            </div>
                            <div className="mt-4"><b>&copy; 2020 Pic Vault</b></div>
                            <div><i>All rights reserved <b>Miguel Santos</b> 2020</i></div>
                        </div>
                    <div className="waves-icon">
                    </div> 
                    </div>
                </div>
               
            </footer>
        )
    }
}
