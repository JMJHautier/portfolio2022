import classNames from "classnames"
import { useEffect, useState, useRef } from "react"
import Project from "../Project"
import './Projects.scss'
const Projects = ()=>{
  const [projectTitle, setProjectTitle] = useState("memOria")

  const projects = ["memOria", "What's that"]
  const tabs = [{title:"tab1", content:"content1", pic:`./pictures/${projectTitle}/section1.png` }, {title:"tab2", content:"content2", pic:`./pictures/${projectTitle}/section2.png`}, {title:"tab3", content:"content3", pic:`./pictures/${projectTitle}/section3.png`}, {title:"tab4", content:"content4", pic:`./pictures/${projectTitle}/section4.png`} ]
  const buttons = useRef([])
  const handleClick = (event) => {
    setProjectTitle(event.currentTarget.innerText)
  }

return <div className="projects"> 
      <h2 className="sectionTitle">Projets</h2>

      <div className="projects__tabs"> 
      {projects.map((project)=> <button onClick={handleClick} className={projectTitle === project?"projects__tabs--active":""}>{project}</button>)}
      </div>
      <Project tabs={tabs} projectTitle={projectTitle} />
      </div>
}
export default Projects