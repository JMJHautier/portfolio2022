import { useEffect, useState } from "react"
import Illustration from "./Illustration"
import TabSystem from "./TabSystem"
import './Project.scss'
import { CSSTransition } from "react-transition-group"

const Project = ({tabs, projectTitle})=>{
  const [transitionIsReset, setTransitionIsReset] = useState(true)

  const [tab1, tab2, tab3, tab4] = tabs
  const [activeTab, setActiveTab] = useState(tab1)
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