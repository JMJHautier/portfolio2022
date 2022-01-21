import './Nav.scss'
import { pickLanguage as handleSelect } from '../../functions/pickLanguage'
import NavMobile from './NavMobile'
import { useEffect, useState } from 'react'
import MenuItem
 from './MenuItems'
const Nav = ({setLanguage, isVisible})=>{
  const language = localStorage.getItem('language')

return <nav>
  <div className="nav__left">Jean Hautier</div>
  <div className="nav__right">
    <div className="nav__language"><select value={language} onChange={(event)=>handleSelect(event, setLanguage)}>
      <option value="EN">English</option>
      <option value="DE">Deutsch</option>
      <option value="FR">Français</option>
      </select>
    </div>
    <div className="nav__right--desktop">
      <MenuItem isVisible={isVisible} />
    </div>
    <div className="nav__right--mobile">
      <NavMobile isVisible={isVisible} />
    </div>
  </div>
</nav>
}
export default Nav