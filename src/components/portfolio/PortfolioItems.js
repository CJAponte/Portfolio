import React from 'react'
import './portfolio.css'


const PortfolioItems = props => {
    return(
        <div className="cardContainer">
            <img className="projectImg" src={props.projectImg} alt="Project Preview" />

            <h1 className="projectName">
                {props.name}
            </h1>

            <div className="projectLinks">
                <a className="linkTags" href={props.github} target="_blank" rel="noopener noreferrer"><div className="githubLink"></div></a>
                <a className="linkTags" href={props.live} target="_blank" rel="noopener noreferrer"><div className="liveLink"></div></a>
            </div>
        </div>
    )
}

export default PortfolioItems