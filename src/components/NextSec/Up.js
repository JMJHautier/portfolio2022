import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './NextSec.scss'
import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { usePrevious } from '@chakra-ui/react'
import classNames from 'classnames'


const Up = ({ratio, currentSection, boundY})=>{
const [nextSection, setNextSection] = useState("home")
const [showArrow, setShowArrow] = useState(false)
const prevBoundY = usePrevious(boundY)
const path = `#${nextSection}`
const iconClasses = classNames({
  upIcon:true,
  hide:!showArrow
})
useEffect(()=>{
  if(prevBoundY){
  if(boundY[currentSection]>prevBoundY[currentSection]){
    setShowArrow(true)
  }
  else{
    setShowArrow(false)
  }
}
}, [boundY])

useEffect(()=>{
  switch(currentSection) {
    case "about": 
      setNextSection("home")
    break;
    case "about2": 
    setNextSection("about")
  break;
    case "projects": 
      setNextSection("about2")
      break;
    case "contact": 
      setNextSection("projects")
    break;
    default:
      setNextSection("home")
  }
}, [currentSection])

return <div className={iconClasses}><HashLink to={path}> <FontAwesomeIcon icon={faAngleUp} size="4x"/></HashLink></div>

}
export default Up