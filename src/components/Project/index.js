import { useEffect, useState } from "react"
import Illustration from "./Illustration"
import TabSystem from "./TabSystem"
import './Project.scss'
import { CSSTransition } from "react-transition-group"

const Project = ()=>{
  const projectTitle = "memoria"
  const [transitionIsReset, setTransitionIsReset] = useState(true)
  const tab1 = {title:"tab1", content:"content1", pic:`./pictures/${projectTitle}/section1.png` }
  const tab2 = {title:"tab2", content:"content2", pic:`./pictures/${projectTitle}/section2.png`}
  const tab3 = {title:"tab3", content:"content3", pic:`./pictures/${projectTitle}/section3.png`}
  const tab4 = {title:"tab4", content:"content4", pic:`./pictures/${projectTitle}/section4.png`}

  const [activeTab, setActiveTab] = useState(tab1)
  const allTabs = [tab1, tab2, tab3, tab4]
  const [inactiveTabs, setInactiveTabs] = useState([tab2, tab3, tab4])
  useEffect(()=> {
    setTransitionIsReset(false)
    setTimeout(()=> {
      setTransitionIsReset(true)
    }, 200) 
  }, [activeTab.pic])

return <div className="project"> 
    <div className="project__container"> 
      <div className="project__left-side">
          <Illustration pic={activeTab.pic} title={projectTitle} transitionIsReset={transitionIsReset}/>
      </div>
      <div className="project__right-side">

        <TabSystem transitionIsReset={transitionIsReset} activeTab={activeTab} setActiveTab={setActiveTab} tabs={inactiveTabs} setTabs={setInactiveTabs} /> 
      </div>
    </div>
  </div>
}
export default Project