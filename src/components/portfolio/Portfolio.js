import React, {useState, useEffect} from "react"
import "./portfolio.css"
import firebase from '../../config/fbConfig'
import PortfolioItems from './PortfolioItems'
import './portfolio.css'



const Portfolio = props => {
    const [portfolioItems, setPortfolioItems] = useState([])

    useEffect(()=>{
        const unsubscribe = firebase
        .firestore()
        .collection('portfolioItems')
        .onSnapshot(
            snapshot => {
                const portfolioItem = snapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                })
                setPortfolioItems(portfolioItem)
            },
            error => {
                console.log(error)
            }
        )
        return () => {
            unsubscribe()
        }
    }, [])


    return (
        <div className="contain">
        <div className="portfolioContainer">
            <div className="portolioHeader">My Projects</div>

            <div className="portfolioItemContainer">
                {portfolioItems.map((material) => {
                    return(
                        <PortfolioItems key={material.projectName} name={material.projectName} github={material.githubLink} live={material.liveLink} projectImg={material.projectImg}/>
                    )

                })}

            </div>
        </div>
        </div>
    )
}

export default Portfolio