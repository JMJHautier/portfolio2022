import { pickLanguage as handleClick } from "../../functions/pickLanguage"

const PickLanguage = ()=>{

return <div className="PickLanguage__container"> 
  <button onClick = {handleClick} id="EN">
  Stick to english please!
  </button>
  <button onClick = {handleClick}  id="DE">
  lieber auf Deutsch, danke!
  </button>
  <button onClick = {handleClick} id="FR">
  en français, bien sur! 
  </button>
</div>
}
export default PickLanguage