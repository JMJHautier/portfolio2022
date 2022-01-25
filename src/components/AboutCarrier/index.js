import { content } from "../../text/aboutCarrier"
import './AboutCarrier.scss'

const AboutCarrier = ()=>{
return (
  <div className="AboutCarrier">
    <h2 className="sectionTitle">
      My first Career
    </h2>

    <div className="AboutCarrier__container">
      <div className="AboutCarrier__content">
        <p>{content}</p>
      </div>
      <div className="AboutCarrier__picture"> 
        <img src="./pictures/AboutCarrier_short.jpg" alt="Wideshot of a UN meeting"/>
      </div>
    </div>
    {/* <div className="pushUp"></div> */}
  </div>
)
}
export default AboutCarrier