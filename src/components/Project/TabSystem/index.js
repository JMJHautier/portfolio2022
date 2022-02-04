import { usePrevious } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ActiveTab from "./ActiveTab"
import Tabs from "./Tabs"

const TabSystem = ({activeTab, setActiveTab, tabs, setTabs})=>{
  const previousActiveTab = usePrevious(activeTab)
  const [previousTab, setPreviousTab] = useState(activeTab)

  const handleChangeTab = (event) => {
    const idNewTab = event.currentTarget.id
    setPreviousTab(activeTab)
    setTabs(prevState => [...prevState, previousActiveTab])

    setActiveTab(tabs[idNewTab])

  }

  useEffect(()=> {
    const filterTab = tabs.filter((tab) => {
      if(tab.title == activeTab.title) {
        return false
      }
      else {
        return true
      }
    })
    setTabs(filterTab)
  }, [activeTab.title])


return <div className="container__tab">
  <ActiveTab tab={activeTab} />
  <Tabs tabs={tabs} setTabs={setTabs} handleChangeTab={handleChangeTab} />
  </div>
}
export default TabSystem