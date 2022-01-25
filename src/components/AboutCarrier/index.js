import useToggle from "../../hooks/useToggle"
import { content } from "../../text/aboutCarrier"
import TransparentButton from "../Buttons/Transparent"
import './AboutCarrier.scss'
import Expanded from "./Expanded"

const AboutCarrier = ()=>{
  const [toggled, setToggle] = useToggle(false)

return (
  <div className="AboutCarrier">
    <h2 className="sectionTitle">
      My first Career
    </h2>

    <div className="AboutCarrier__container">
      <div className="AboutCarrier__content">
        <p>{content}</p>
        {toggled? 
          <TransparentButton onClick={setToggle} className="importantColor">
          retour
          </TransparentButton>
        
        :<TransparentButton onClick={setToggle} className="importantColor">
          Envie d'en savoir plus?
        </TransparentButton>
}
      </div>
      <div className="AboutCarrier__picture"> 
        <img src="./pictures/AboutCarrier_short.jpg" alt="Wideshot of a UN meeting"/>
      </div>

    </div>
    {toggled&&
        <Expanded />
      }
    {/* <div className="pushUp"></div> */}
  </div>
)
}
export default AboutCarrier