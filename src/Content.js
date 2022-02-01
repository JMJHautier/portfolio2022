import { useEffect, useRef, useState } from 'react';
import './App.scss';
import AboutCarrier from './components/AboutCarrier';
import Next from './components/Next';
import Down from './components/NextSec/Down';
import Up from './components/NextSec/Up';
import Welcome from './components/Welcome';

const Content = ({isVisible, addObserver, ratio, currentSection})=>{

  const section  = useRef([])
  const sectionIndex = useState(0)
  const steps = [0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  useEffect(()=> {
    console.log(section)
    section?.current?.map((sec)=> addObserver(sec,  steps))
    console.log(isVisible)
  }, [])

return (
  <>
  <section id="home" ref={(el) => section.current.push(el)}>
  <Welcome />
    </section>
  <section id="about" ref={(el) => section.current.push(el)}>
  <AboutCarrier />
  </section>

  <section id="projects" ref={(el) => section.current.push(el)}>
  <Welcome />
  </section>

  <section id="contact" ref={(el) => section.current.push(el)}>
  <Welcome />
  </section>
  <Down section={section} ratio={ratio} currentSection={currentSection}/>
  {!isVisible["home"]&&<Up section={section} ratio={ratio} currentSection={currentSection}/>}
  </>
)
}
export default Content