import React from "react"
import "./home.css"
import { Link } from 'react-router-dom'


const Home = props => {
    return (
        <div className="homeContainer">
            <div className="homeBodyContainer">
                <div className="homeHeader"><h1>Cesar Aponte</h1></div>
                <div className="homeBody">Full Stack Web Developer</div>
                <div className="socialLinks">
                    <a href="https://github.com/CJAponte" target="_blank" rel="noopener noreferrer" className="socialLinkTags"><div id="githubIcon"></div></a>
                    <a href="https://www.linkedin.com/in/cjaponte/" target="_blank" rel="noopener noreferrer" className="socialLinkTags"><div  id="linkedinIcon"></div></a>
                    <a href="https://twitter.com/CJApontevazquez" target="_blank" rel="noopener noreferrer" className="socialLinkTags"><div id="twitterIcon"></div></a>
                </div>
                <a href='https://drive.google.com/u/0/uc?id=1L8zzNG6XLxb-XQUTmmuzpWSOGBbRUGCV&export=download' target="_blank" rel="noopener noreferrer" className="resumeLink"><div className="resumeBtn">
                    <p>Resume </p>
                </div></a>
                <div className="subText">(Download PDF)</div>
            </div>
        </div>
    )
}

export default Home