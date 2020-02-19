import React, {useEffect } from "react"
import { Link } from 'react-router-dom'
import './SideNav.css'
const SideNav = props => {
 
    useEffect(()=> {
        if(props.location.pathname === "/"){
            document.getElementById("homeTab").className = "selectedNav"
            document.getElementById("portfolioTab").className = "item"
        }else if(props.location.pathname === "/portfolio"){
            document.getElementById("portfolioTab").className = "selectedNav"
            document.getElementById("homeTab").className = "item"
        }
    })

    return(
        <div className="sideNavContainer">
            <div className="mobileBtn"></div>
            <div className="navHeadImgContainer">
                <div className="navHeadImg"></div>

            </div>
            <div className="navItems">
                <ul className="navList">
                <Link to="/"><li className={"item"} id="homeTab">Home</li></Link>
                <Link to="/portfolio"><li className={"item"} id="portfolioTab">Portfolio</li></Link>
                </ul>
            </div>
            <div className="navFooter">
                2020 - 2021
            </div>
        </div>
    )
}


export default SideNav