import { useEffect, useState } from "react"
import Illustration from "./Illustration"
import TabSystem from "./TabSystem"
import useToggle from '../../hooks/useToggle'
import './Project.scss'
import { CSSTransition } from "react-transition-group"
import TransparentButton from "../Buttons/Transparent"
import * as presentation from "../../text/projects/presentation.js"

const Project = ({tabs, projectTitle})=>{
  console.log(presentation["memoria"])
  console.log(projectTitle)
  const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "") 
  console.log({cleantTitle, presentation})
  const presentationContent = presentation[cleantTitle]
  const [transitionIsReset, setTransitionIsReset] = useState(true)
  const homePic = "./pictures/memoria/Home-project.png"
  const [toggled, switchToggle] = useToggle(false)
  const [tab1, tab2, tab3, tab4] = tabs
  const [activeTab, setActiveTab] = useState(tab1)
  const [inactiveTabs, setInactiveTabs] = useState([tab2, tab3, tab4])
  useEffect(()=> {
    setTransitionIsReset(false)
    setTimeout(()=> {
      setTransitionIsReset(true)
    }, 200) 
  }, [activeTab.pic, toggled])

return <div className="project"> 
    <div className="project__container"> 

      <div className="project__left-side">
          {toggled&&<h2><TransparentButton onClick={switchToggle}>retour</TransparentButton></h2>}

          <Illustration switchToggle={switchToggle} pic={toggled?activeTab.pic:homePic} title={projectTitle} transitionIsReset={transitionIsReset}/>
      </div>
      <div className="project__right-side">
      <CSSTransition in={toggled} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}} unmountOnExit>
        <TabSystem transitionIsReset={transitionIsReset} activeTab={activeTab} setActiveTab={setActiveTab} tabs={inactiveTabs} setTabs={setInactiveTabs} /> 
      </CSSTransition>
      <CSSTransition in={!toggled} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}} unmountOnExit>

        <div> 
          {presentationContent}
          <TransparentButton onClick={switchToggle}>En savoir plus</TransparentButton>
          </div> 
          </CSSTransition>

      </div>
    </div>
  </div>
}
export default Project