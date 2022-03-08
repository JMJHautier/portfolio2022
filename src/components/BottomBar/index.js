import { Icon } from '@iconify/react';
import germanCV from "./CV/Lebenslauf_HAUTIER.pdf"
import englishCV from "./CV/CV_HAUTIER_EN.pdf"
import frenchCV from "./CV/CV_HAUTIER_FR.pdf"
import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageContext';
import { useState } from 'react';

import './BottomBar.scss'

const BottomBar = ()=>{
  const [CVLink, setCVLink] = useState(englishCV)
  const {language} = useContext(LanguageContext)

  useEffect(()=> {
    switch(language) {
      case "EN": {
        setCVLink(englishCV)
        break
      }
      case "FR": {
        setCVLink(frenchCV)
        break
      }
      case "DE": {
        setCVLink(germanCV)
        break
      }
      default:{
        setCVLink(englishCV)
      }
    }
  }, [language])

return <div className="bottomBar">
  <ul>
  <li>
      <a target="_blank" href="https://github.com/JMJHautier/" rel="noreferrer">
        <Icon width="40px" icon="carbon:logo-github" />
      </a>
    <li>
        <a target="_blank" href={CVLink} rel="noreferrer">
          <Icon width="40px" icon="carbon:user-profile" />
        </a>
    </li>


    </li>
    <li>
      <a target="_blank" href="https://www.linkedin.com/in/jean-hautier/" rel="noreferrer">
        <Icon width="40px" icon="carbon:logo-linkedin" />
      </a>
    </li>
    <li>
        <a target="_blank" href="https://www.xing.com/profile/Jean_Hautier" rel="noreferrer">
          <Icon width="40px" icon="carbon:logo-xing" />
        </a>
    </li>

  </ul>
  </div>
}
export default BottomBar