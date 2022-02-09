import { useEffect, useRef, useState } from 'react';
import './App.scss';
import AboutCarrier from './components/AboutCarrier';
import AboutReconversion from './components/AboutReconversion';
import Contact from './components/Contact';
import Next from './components/Next';
import Down from './components/NextSec/Down';
import Up from './components/NextSec/Up';
import Project from './components/Project';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

const Content = ({isVisible, boundY, addObserver, ratio, currentSection})=>{

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
    <section id="about2" ref={(el) => section.current.push(el)}>
      <AboutReconversion />
    </section>
  </section>

  <section id="projects" ref={(el) => section.current.push(el)}>
  <Projects />
  </section>

  <section id="contact" ref={(el) => section.current.push(el)}>
  <Contact />
  </section>
  {!isVisible["home"]&&<Up section={section} boundY={boundY} ratio={ratio} currentSection={currentSection}/>}

  <Down section={section} ratio={ratio} currentSection={currentSection}/>
  </>
)
}
export default Content