import { useEffect, useState } from "react"
import Project from "../Project"
import './Projects.scss'
import * as tabs from '../../text/projects/slides/'
import { content, title } from "../../text/projects"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
//! ne pas supprimer! utilisés dans le useEffect! 
import * as memoria from "../../text/projects/slides/memoria"
import * as whatsthat from  "../../text/projects/slides/whatsthat"
//! fin de pas supprimer!

const Projects = ()=>{


const {setLanguage, language} = useContext(LanguageContext)

  const [projectTitle, setProjectTitle] = useState("memOria")
  const [projectTabs, setProjectTabs] = useState(Object.values(tabs["memoria"]))
  const projects = ["memOria", "What's that"]


  useEffect(()=> {
    const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "")
    import(`../../text/projects/slides/${cleantTitle}`).then((response)=> {
      const {tab1, tab2, tab3, tab4} = response
      setProjectTabs(prevState => (Object.values({
        tab1:tab1[language],
        tab2:tab2[language],
        tab3: tab3[language],
        tab4: tab4[language]
      }
      )
    ))
    })

  }, [projectTitle, language])

  const handleClick = (event) => {
    setProjectTitle(event.currentTarget.innerText)
  }

return <div className="projects"> 
      <h2 className="sectionTitle">{title}</h2>
      <div className="projects__intro"><p>{content}</p></div>
      <div className="projects__tabs"> 
      {projects.map((project)=> <button onClick={handleClick} className={projectTitle === project?"projects__tabs--active":""}>{project}</button>)}
      </div>
      {projectTabs&&
      <Project language={language} tabs={projectTabs} projectTitle={projectTitle} />
}
      </div>
}
export default Projects