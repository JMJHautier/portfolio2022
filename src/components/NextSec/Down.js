import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

import './NextSec.scss'
import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'


const Down = ({ratio, currentSection})=>{
const [nextSection, setNextSection] = useState("home")
const path = `#${nextSection}`
useEffect(()=>{
  switch(currentSection) {
    case "home": 
      setNextSection("about")
    break;

    case "about": 
      setNextSection("about2")
    break;

    case "about2": 
    setNextSection("projects")
    break;

    case "projects": 
      setNextSection("contact")
    break;

    default:
      setNextSection("home")
  }
}, [currentSection])

return <div className="downIcon"><HashLink to={path}> <FontAwesomeIcon icon={faAngleDown} size="4x"/></HashLink></div>

}
export default Down