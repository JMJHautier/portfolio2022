import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './NextSec.scss'
import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'


const Up = ({ratio, currentSection})=>{
const [nextSection, setNextSection] = useState("home")
const path = `#${nextSection}`
useEffect(()=>{
  switch(currentSection) {
    case "about": 
      setNextSection("home")
    break;
    case "projects": 
      setNextSection("about")
      break;
    case "contact": 
      setNextSection("projects")
    break;
    default:
      setNextSection("home")
  }
}, [currentSection])

return <div className="upIcon"><HashLink to={path}> <FontAwesomeIcon icon={faAngleUp} size="4x"/></HashLink></div>

}
export default Up