import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Nav from './components/Nav'
import Next from './components/Next';
import PickLanguage from './components/PickLanguage';
import Welcome from './components/Welcome';
import useIntersection from './hooks/useIntersection.ts';

function App() {
  const storedLanguage = localStorage.getItem('language')
  const [language, setLanguage] = useState(storedLanguage)
  const [isVisible, addObserver, ratio] = useIntersection()
  const section  = useRef([])
  const steps = [0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  useEffect(()=> {
    section.current.map((sec)=> addObserver(sec,  steps))
    console.log(isVisible)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Nav setLanguage={setLanguage} isVisible={isVisible} ratio={ratio} />
      </header>
      <div id="container" class="container">
        {language?
        <>
        <section id="home" ref={(el) => section.current.push(el)}>
        <Welcome />
        <Next section="#about"/>
          </section>
        <section id="about" ref={(el) => section.current.push(el)}>
        <Next section="#home" up={true}/>
        <Welcome />
        <Next section="#projects"/>

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
      :<PickLanguage setLanguage={setLanguage}/>}

      </div>
    </div>
  );
}

export default App;
