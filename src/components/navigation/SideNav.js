import React, {useEffect } from "react"
import { Link, BrowserRouter } from 'react-router-dom'
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

    

    function openMenu(){
        // document.getElementById("menuCloser").classList.remove('opener')
        document.getElementById("menuCloser").classList.toggle("closer")
        document.getElementById("sideNavContainer").classList.toggle("sideNavHidden")

        
    }

    function menuReset(){
        document.getElementById("menuCloser").classList.remove("closer")
        document.getElementById("sideNavContainer").classList.remove("sideNavHidden")
    }

    return(
        <div className="sideNavBody">
        <div className="sideNavContainer" id="sideNavContainer">
            <div className="mobileBtn"></div>
            <div className="navHeadImgContainer">
                <div className="navHeadImg"></div>

            </div>
            <div className="navItems">
                <ul className="navList">
                <Link to="/"><li className={"item"} id="homeTab" onClick={menuReset}>Home</li></Link>
                <Link to="/portfolio"><li className={"item"} id="portfolioTab" onClick={menuReset}>Portfolio</li></Link>
                </ul>
            </div>
            <div className="navFooter">
                2020 - 2021
            </div>
        </div>
        
        <div id="menuCloser" className="opener" onClick={openMenu}>  </div>
        </div>
    )
}


export default SideNav