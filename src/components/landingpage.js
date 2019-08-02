import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import meImage from '../images/me.jpg';
import Footer from "./Footer";

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Android & Web Developer</h1>

                            <hr/>

                            <p>Java | Kotlin | Firebase | HTML/CSS | JavaScript | React | Redux | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* Github */}
                                <a href="https://github.com/sceballosdev" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/steven-ceballos-le%C3%B3n-485730136/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>


                <Footer/>
            </div>
        )
    }
}

export default Landing;
