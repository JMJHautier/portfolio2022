import {hello, content} from '../../text/welcome'
import './Welcome.scss'

const Welcome = ()=>{
const language = localStorage.getItem('language')

return <div className="welcome">
  <div style={{display:"flex", flexWrap:"wrap", justifyContent: "center", alignItems:"center", width:"100%"}}>
    <div className="welcome__content">
        <h2> {hello}</h2>
        <p> {content}
        </p>
    </div>
    <div className="welcome__image">
      <img  src="/pictures/JeanHautier.JPG" alt="Headshot of Jean Hautier"/>
    </div>
  </div>
  <div className="pushUp">

  </div>
</div>}
export default Welcome