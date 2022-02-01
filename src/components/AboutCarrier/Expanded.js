import { ExpandedItem1, ExpandedItem2,ExpandedItem3, ExpandedItem3a, ExpandedItem3b, AllItem3 } from "../../text/aboutCarrier"
import Bubble from "../Bubble/Bubble"
import { CSSTransition} from "react-transition-group"
import {useEffect, useRef} from 'react'

const Expanded = ({toggled})=>{
  const expandedItem3 =`${ExpandedItem3} ${ExpandedItem3a} ${ExpandedItem3b}`
  console.log(ExpandedItem2)
  const extended = useRef()
  useEffect(()=> {
    if(toggled) {
      extended.current.scrollIntoView()
    }
  }, [toggled])

return ( 
 <div ref={extended} className="AboutCarrier__extended">
  <CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit> 
      <div className="AboutCarrier__extended__wrapper"> 
        <CSSTransition in={toggled} timeout={800} classNames={{enter:"bubble-enter", enterActive:"bubble-enter-active", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
          <Bubble picture="./pictures/unesco.png" text={ExpandedItem1} />
        </CSSTransition>
      </div>
  </CSSTransition>
  
  <CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active1", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit> 
    <div className="AboutCarrier__extended__wrapper2"> 
      <CSSTransition in={toggled} timeout={800} classNames={{enter:"bubble-enter", enterActive:"bubble-enter-active1", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
        <Bubble picture='./pictures/logo_leadership_eftp.png' alt="Logo of Leadership Programme" text={ExpandedItem2} />
      </CSSTransition>
    </div>
  </CSSTransition>

<CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active2", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit> 
  <div className="AboutCarrier__extended__wrapper3"> 
    <CSSTransition in={toggled} timeout={800} classNames={{enter:"bubble-enter", enterActive:"bubble-enter-active2", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
        <Bubble picture="./pictures/logo-pp.png" alt='extended__logo' text={AllItem3} />
    </CSSTransition>
  </div>
</CSSTransition>

    </div>
)
}
export default Expanded