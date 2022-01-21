import {hello} from '../../text/welcome'
import './Welcome.scss'

const Welcome = ()=>{
const language = localStorage.getItem('language')

return <div className="welcome">
  <div style={{display:"flex", justifyContent: "center", alignItems:"center", width:"100%"}}>
    <div className="welcome__content">
        <h2> {hello[language]}</h2>
        <p> Et bienvenue sur mon profil, celui d'un ancien employé des Nations Unies qui a décidé de se reconvertir dans le développement web.
        </p>
    </div>
    <div className="welcome__image">
      <img  src="/pictures/whatsapp.png" alt="Headshot of Jean Hautier"/>
    </div>
  </div>
  <div className="pushUp">

  </div>
</div>}
export default Welcome