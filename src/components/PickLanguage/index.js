import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import { pickLanguage as handleClick } from "../../functions/pickLanguage"
import './PickLanguage.scss'

const PickLanguage = ()=>{

const {setLanguage} = useContext(LanguageContext)

return <div className="PickLanguage__container"> 
  <button onClick = {(event)=> handleClick(event, setLanguage)} id="EN">
  Stick to english please!
  </button>
  <button onClick = {(event)=> handleClick(event, setLanguage)}  id="DE">
  Lieber auf Deutsch, danke!
  </button>
  <button onClick = {(event)=> handleClick(event, setLanguage)} id="FR">
  En français, bien sur! 
  </button>
</div>
}
export default PickLanguage