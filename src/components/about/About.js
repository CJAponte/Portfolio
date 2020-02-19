import React from "react"
import "./about.css"

const About = props => {
    return (
        <div className="aboutContainer">
            <div className="aboutSection">
                <div className="firstColumn">
                    <div className="firstColumnFirstBox"><p>test test test test test <br/>test test test test test test <br/> test test test tes test</p></div>
                    <div className="firstColumnSecondBox">test</div>
                </div>
                <div className="secondColumn">
                    <div className="secondColumFirstBox"><p>test</p></div>
                    <div className="secondColumSecondBox">test</div>
                </div>
            </div>
        </div>
    )
}

export default About