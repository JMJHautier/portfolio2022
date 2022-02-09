import classNames from "classnames"
import useToggle from "../../hooks/useToggle"
import { content } from "../../text/aboutCarrier"
import TransparentButton from "../Buttons/Transparent"
import './AboutReconversion.scss'
import Expanded from "./Expanded"

const AboutReconversion = ()=>{
const [toggled, setToggle] = useToggle(false)
const contentClass = classNames({
  "AboutReconversion__content": true,
  "extraBorder": toggled
})
return (
<div className="AboutReconversion">
  <h2 className="sectionTitle">
    My first Career
  </h2>

  <div className="AboutReconversion__container">

    <div className="AboutReconversion__picture"> 
      <img src="./pictures/AboutCarrier_short.jpg" alt="Wideshot of a UN meeting"/>
    </div>
    <div className={contentClass}>
      <p>{content}</p>
        <TransparentButton onClick={setToggle} className="importantColor">
        {toggled?"retour":"Envie d'en savoir plus?"}
        </TransparentButton>
    </div>
  </div>
      <Expanded toggled={toggled}/>
  {/* <div className="pushUp"></div> */}
</div>)
}
export default AboutReconversion