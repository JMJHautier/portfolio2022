import classNames from "classnames"
import useToggle from "../../hooks/useToggle"
import TransparentButton from "../Buttons/Transparent"
import './AboutReconversion.scss'
import Expanded from "./Expanded"
import {title, content} from "../../text/aboutReconversion"
import { back, learnMore } from "../../text/buttons"

const AboutReconversion = ()=>{
const [toggled, setToggle] = useToggle(false)
const contentClass = classNames({
  "AboutReconversion__content": true,
  "extraBorder": toggled
})
return (
<div className="AboutReconversion">
  <h2 className="sectionTitle">
    {title}
  </h2>

  <div className="AboutReconversion__container">

    <div className="AboutReconversion__picture" onClick={setToggle}> 
      <img src="./pictures/reconversion.png" alt=""/>
    </div>
    <div className={contentClass}>
      <p>{content}</p>
        <TransparentButton onClick={setToggle} className="importantColor">
        {toggled?back:learnMore}
        </TransparentButton>
    </div>
  </div>
      <Expanded toggled={toggled}/>
  {/* <div className="pushUp"></div> */}
</div>)
}
export default AboutReconversion