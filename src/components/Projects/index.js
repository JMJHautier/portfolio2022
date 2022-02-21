import { useEffect, useState, useRef, lazy } from "react"
import Project from "../Project"
import './Projects.scss'
import * as tabs from '../../text/projects/slides/'
import { content, title } from "../../text/projects"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import * as memoria from "../../text/projects/slides/memoria"
import * as whatsthat from  "../../text/projects/slides/whatsthat"

const Projects = ()=>{


    const {setLanguage, language} = useContext(LanguageContext)

  const [projectTitle, setProjectTitle] = useState("memOria")
  const [projectTabs, setProjectTabs] = useState(Object.values(tabs["memoria"]))
  // const [test, setTest] = useState()
  const [languageSlide, setLanguageSlide] = useState()
  console.log(projectTabs)

  // useEffect(()=> {

  // }, [language])
  useEffect(()=> {
    const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "")
    import(`../../text/projects/slides/${cleantTitle}`).then((response)=> {
      const {tab1, tab2, tab3, tab4} = response
      setLanguageSlide(prevState => (Object.values({
        tab1:tab1[language],
        tab2:tab2[language],
        tab3: tab3[language],
        tab4: tab4[language]
      }
      )
    ))
    })

    // import('../../text/projects/slides/memoria').then((response) => {
      // setTest(tabi)
      // set
      // setProjectTabs(Object.values(response))
    // })
    // const tabsInArray = Object.values(tabs[cleantTitle])
    // setProjectTabs(tabsInArray)
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
      {languageSlide&&
      <Project language={language} tabs={languageSlide} projectTitle={projectTitle} />
}
      </div>
}
export default Projects