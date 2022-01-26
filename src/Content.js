import { useEffect, useRef } from 'react';
import './App.scss';
import AboutCarrier from './components/AboutCarrier';
import Next from './components/Next';
import Welcome from './components/Welcome';

const Content = ({isVisible, addObserver})=>{

  const section  = useRef([])
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
  <Next section="#about"/>
    </section>
  <section id="about" ref={(el) => section.current.push(el)}>
  {/* <Next section="#home" up={true}/> */}
  <AboutCarrier />
  {/* <Next section="#projects"/> */}

  </section>

  <section id="projects" ref={(el) => section.current.push(el)}>
  <Next section="#about" up={true}/>

  <Welcome />
  <Next section="#contact"/>

  </section>

  <section id="contact" ref={(el) => section.current.push(el)}>
  <Next section="#projects" up={true}/>
  <Welcome />
  <Next section="#home" up={true} style={{top:"80vh"}}/>

  </section>
  </>

)
}
export default Content