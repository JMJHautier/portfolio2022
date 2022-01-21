import { pickLanguage as handleClick } from "../../functions/pickLanguage"
import './PickLanguage.scss'

const PickLanguage = ({setLanguage})=>{

return <div className="PickLanguage__container"> 
  <button onClick = {(event)=> handleClick(event, setLanguage)} id="EN">
  Stick to english please!
  </button>
  <button onClick = {(event)=> handleClick(event, setLanguage)}  id="DE">
  lieber auf Deutsch, danke!
  </button>
  <button onClick = {(event)=> handleClick(event, setLanguage)} id="FR">
  en français, bien sur! 
  </button>
</div>
}
export default PickLanguage