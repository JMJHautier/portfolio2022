import classNames from "classnames"
import useToggle from "../../hooks/useToggle"
import {title, content } from "../../text/aboutCarrier"
import {back, learnMore} from "../../text/buttons"
import TransparentButton from "../Buttons/Transparent"
import './AboutCarrier.scss'
import Expanded from "./Expanded"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AboutCarrier = ()=>{
  const [toggled, setToggle] = useToggle(false)
  const contentClass = classNames({
    "AboutCarrier__content": true,
    "extraBorder": toggled
  })
return (
  <div className="AboutCarrier">
    <h2 className="sectionTitle">
      {title}
    </h2>

    <div className="AboutCarrier__container">
      <div className={contentClass}>
        <p>{content}</p>
          <TransparentButton onClick={setToggle} className="importantColor">
          {toggled?back:learnMore}
          </TransparentButton>
      </div>
      <div className="AboutCarrier__picture"> 
        <img src="./pictures/AboutCarrier_short.jpg" alt="Wideshot of a UN meeting"/>
      </div>

    </div>
        <Expanded toggled={toggled}/>
    {/* <div className="pushUp"></div> */}
  </div>
)
}
export default AboutCarrier