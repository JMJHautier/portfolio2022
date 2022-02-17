import './Nav.scss'
import { pickLanguage as handleSelect } from '../../functions/pickLanguage'
import NavMobile from './NavMobile'
import { useContext, useEffect, useState } from 'react'
import MenuItem
 from './MenuItems'
import { LanguageContext } from '../../context/LanguageContext'
const Nav = ({ isVisible, ratio})=>{

  const {setLanguage, language} = useContext(LanguageContext)
  // const selectedOption = (language) => {
  //   switch(language) {
  //     case "EN": return "English";
  //     case "FR": return "Français";
  //     case "DE": return"Deutsch";
  //     default: return "English";
  //   }
  // }
return <nav>
  <div className="nav__left">Jean Hautier</div>
  <div className="nav__right">
    <div className="nav__language"><select value={language} onChange={(event)=>handleSelect(event, setLanguage)}>
      {/* <option selected>{selectedOption(language)}</option> */}
      <option value="EN">English</option>
      <option value="DE">Deutsch</option>
      <option value="FR">Français</option>
      </select>
    </div>
    <div className="nav__right--desktop">
      <MenuItem isVisible={isVisible} ratio={ratio}/>
    </div>
    <div className="nav__right--mobile">
      <NavMobile isVisible={isVisible} ratio={ratio}/>
    </div>
  </div>
</nav>
}
export default Nav