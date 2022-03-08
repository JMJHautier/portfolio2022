import { useEffect, useState, useRef } from "react"
import Illustration from "./Illustration"
import TabSystem from "./TabSystem"
import useToggle from '../../hooks/useToggle'
import './Project.scss'
import { CSSTransition } from "react-transition-group"
import TransparentButton from "../Buttons/Transparent"
import * as presentation from "../../text/projects/presentation/index.js"
import {back, learnMore} from "../../text/buttons"

const Project = ({tabs, projectTitle, language})=>{

  const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "") 
  const presentationContent = presentation[cleantTitle]
  const [transitionIsReset, setTransitionIsReset] = useState(true)
  const homePic = `./pictures/${cleantTitle}/Home-project.png`
  const [toggled, switchToggle, setToggle] = useToggle(false)
  const [tab1, tab2, tab3, tab4] = tabs

  const [activeTab, setActiveTab] = useState(tabs[0])
  const [inactiveTabs, setInactiveTabs] = useState([tab2, tab3, tab4])
  const container = useRef();
  const focusProject = () => {
    console.log(container.current)
    container.current.scrollIntoView(true)
  }
  useEffect(()=> {
    setTransitionIsReset(false)
    setTimeout(()=> {
      setTransitionIsReset(true)
    }, 200) 
  }, [activeTab?.pic, toggled])

  useEffect(()=>{
    setToggle(false)

  }, [projectTitle])

  useEffect(()=> {
    setActiveTab(tabs[0])
    setInactiveTabs([tab2, tab3, tab4])
  }, [tabs, language])

return <div className="project" tabIndex="-1" ref={container}> 
    <div className="project__container" > 

      <div className="project__left-side">
          {toggled&&<h2><TransparentButton onClick={switchToggle}>{back}</TransparentButton></h2>}

          <Illustration switchToggle={switchToggle} pic={toggled?activeTab?.pic:homePic} title={projectTitle} transitionIsReset={transitionIsReset}/>
      </div>
      <div className="project__right-side">
      <CSSTransition in={toggled} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}} unmountOnExit>
        <TabSystem container={container.current} transitionIsReset={transitionIsReset} activeTab={activeTab} setActiveTab={setActiveTab} tabs={inactiveTabs} setTabs={setInactiveTabs} /> 
      </CSSTransition>
      <CSSTransition in={!toggled} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}} unmountOnExit>

        <div> 
          {presentationContent} <br /> <br />
          <TransparentButton onClick={()=>{focusProject(); switchToggle(); }}>{learnMore}</TransparentButton>

          </div> 

          </CSSTransition>

      </div>
    </div>
  </div>
}
export default Project