import { conclusion, ExpandedItem1, ExpandedItem2,ExpandedItem3, ExpandedItem3a, ExpandedItem3b, AllItem3 } from "../../text/aboutCarrier"
import Bubble from "../Bubble/Bubble"
import { CSSTransition} from "react-transition-group"
import {useEffect, useRef} from 'react'
import classNames from "classnames"

const Expanded = ({toggled})=>{

  const extended = useRef()
  useEffect(()=> {
    if(toggled) {
      extended.current.scrollIntoView()
    }
  }, [toggled])
 const extendedClass = classNames({
   AboutCarrier__extended: true,
   hide: !toggled
 })
return (
 <div ref={extended} className={extendedClass}>
<CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit>

      <div className="AboutCarrier__extended__wrapper"> 
      <CSSTransition appear={true} in={toggled} timeout={800} classNames={{appear:"bubble-appear", appearActive:"bubble-appear-active", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
          <Bubble picture="./pictures/unesco.png" text={ExpandedItem1} />
      </CSSTransition>
      </div>
  </CSSTransition>
  
  <CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active1", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit> 
    <div className="AboutCarrier__extended__wrapper2"> 
    <CSSTransition appear={true} in={toggled} timeout={800} classNames={{appear:"bubble-appear", appearActive:"bubble-appear-active1", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 

        <Bubble picture='./pictures/logo_leadership_eftp.png' alt="Logo of Leadership Programme" text={ExpandedItem2} />
        </CSSTransition>
    </div>
  </CSSTransition>

<CSSTransition in={toggled} timeout={800} classNames={{enter:"wrapper-enter", enterActive:"wrapper-enter-active2", exit:"wrapper-exit", exitActive:"wrapper-exit-active"}} unmountOnExit> 
  <div className="AboutCarrier__extended__wrapper3"> 
  <CSSTransition appear={true} in={toggled} timeout={800} classNames={{appear:"bubble-appear", appearActive:"bubble-appear-active2", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
        <Bubble picture="./pictures/logo-pp.png" alt='extended__logo' text={AllItem3} />
  </CSSTransition>
  </div>
</CSSTransition>
<CSSTransition in={toggled} timeout={800} classNames={{appear:"bubble-appear", appearActive:"bubble-appear-active3", exit:"bubble-exit", exitActive:"bubble-exit-active"}} unmountOnExit> 
  <div className="AboutCarrier__extended__wrapper4"> 
      {conclusion}
  </div>
  </CSSTransition>
    </div>
)
}
export default Expanded