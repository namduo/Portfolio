import React, { Component } from 'react';

// Images
import ReactLogo from '../img/skills_icon_react.png';
import JavascriptLogo from '../img/skills_icon_js.png';
import WebpacktLogo from '../img/skills_icon_webpack.png';
import CSSLogo from '../img/skills_icon_css.png';
import PhotoshopLogo from '../img/skills_icon_photoshop.png';

export default class About extends Component {
  render() {
    return (
      
      <div className="container_about grid_container">
        <div className="grid_about">

          <div className="inner_intro">
            
            <h3>ABOUT ME</h3>
            <p>I am a designer / developer based in London, England. I have a passion for design and development. 
            <br/><br/>  
            I enjoy aspects of both front and back end technologies and love creating websites from start to finish.</p>
          
          </div>

          <div className="inner_skills">
          
          <h3>MY SKILLS</h3>

            <p className="dev_title">Front-End: <span className="dev_skills">HTML, CSS3, Javascript</span></p>
            
            <p className="dev_title">Back-End: <span className="dev_skills">NodeJS, MongoDB, APIs</span></p>
            
            <p className="dev_title">Design: <span className="dev_skills">Photoshop, Illustrator, InDesign</span></p>
            

            <div className="skills_logo">

              <p className="dev_title">This portfolio uses: <br/> <span className="skills-highlight">React, Redux, Webpack and CSS3</span></p>

              <ul>
                <li><img src={ PhotoshopLogo } alt="Photoshop" /></li>
                <li><img src={ ReactLogo } alt="React" /></li>
                <li><img src={ CSSLogo } alt="CSS" /></li>
                <li><img src={ JavascriptLogo } alt="Javascript" /></li>
                <li><img src={ WebpacktLogo } alt="Webpack" /></li>

              </ul>
            </div>
          
          </div>

        </div>
      </div>
    );
  }
}
