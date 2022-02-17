import { useEffect, useState, useRef } from "react"
import Project from "../Project"
import './Projects.scss'
import * as tabs from '../../text/projects/slides/'
import { content, title } from "../../text/projects"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

const Projects = ()=>{


    const {setLanguage, language} = useContext(LanguageContext)

  const [projectTitle, setProjectTitle] = useState("memOria")
  const [projectTabs, setProjectTabs] = useState(Object.values(tabs["memoria"]))
  console.log(projectTabs)

  useEffect(()=> {
    const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "")
    const tabsInArray = Object.values(tabs[cleantTitle])
    setProjectTabs(tabsInArray)
    // setProjectTabs(Object.values(tabs["whatsthat"]))

  }, [projectTitle, language])

  const projects = ["memOria", "What's that"]
  const tabsInArray = Object.values(projectTabs)
  const buttons = useRef([])
  const handleClick = (event) => {
    setProjectTitle(event.currentTarget.innerText)
  }

return <div className="projects"> 
      <h2 className="sectionTitle">{title}</h2>
      <div className="projects__intro"><p>{content}</p></div>
      <div className="projects__tabs"> 
      {projects.map((project)=> <button onClick={handleClick} className={projectTitle === project?"projects__tabs--active":""}>{project}</button>)}
      </div>
      <Project tabs={projectTabs} projectTitle={projectTitle} />
      </div>
}
export default Projects