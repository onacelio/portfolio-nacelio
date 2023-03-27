import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import PortfolioItems from "./PortfolioItems";

export default function Portfolios() {

    const [item, setItem] = useState({ name: "all" })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if(item.name === "Todos") {
            setProjects(projectsData)
        } 

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            })

            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        setActive(index)
    }

    return (    
        <div>
            <div className="portfolio_filters">
                {
                    projectsNav.map((item, index) => {
                        return (
                            <span onClick={(e) => {
                                handleClick(e, index)
                            }} className={`${active === index ? "active-portfolio": ""} portfolio_item`} key={index}>{item.name}</span>
                        )
                    })
                }
            </div>

            <div className="portfolio_container container grid">
                {
                    projects.map((item) => {
                        return <PortfolioItems item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}