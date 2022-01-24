import { content } from "../../text/aboutCarrier"
import './AboutCarrier.scss'

const AboutCarrier = ()=>{
  const language = localStorage.getItem('language')
return (
  <div className="AboutCarrier">
    <h2 className="sectionTitle">
      My first Career
    </h2>

    <div className="AboutCarrier__container">
      <div className="AboutCarrier__content">
        <p>{content[language]}</p>
      </div>
      <img src="./pictures/AboutCarrier_short.jpg" alt="Wideshot of a UN meeting"/>
    </div>
  </div>
)
}
export default AboutCarrier