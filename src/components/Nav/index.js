import './Nav.scss'
import { pickLanguage as handleSelect } from '../../functions/pickLanguage'

const Nav = ()=>{
return <nav>
  <div className="nav__left">Jean Hautier</div>
  <ul className="nav__right">
    <li><select onChange={handleSelect}>
      <option value="EN">English</option>
      <option value="DE">Deutsch</option>
      <option value="FR">Français</option>
      </select>
    </li>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>
</nav>
}
export default Nav