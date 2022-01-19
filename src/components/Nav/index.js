import './Nav.scss'
import { pickLanguage as handleSelect } from '../../functions/pickLanguage'
import NavMobile from './NavMobile'
import MenuItem
 from './MenuItems'
const Nav = ({setLanguage})=>{
  const language = localStorage.getItem('language')
return <nav>
  <div className="nav__left">Jean Hautier</div>
  <ul className="nav__right">
    <li className="nav__language"><select onChange={(event)=>handleSelect(event, setLanguage)}>
      <option value="EN">English</option>
      <option value="DE">Deutsch</option>
      <option value="FR">Français</option>
      </select>
    </li>
    <div className="nav__right--desktop">
      <MenuItem />
    </div>
    <div className="nav__right--mobile">
      <NavMobile />
    </div>
  </ul>
</nav>
}
export default Nav