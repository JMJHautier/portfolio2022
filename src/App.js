import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import Welcome from './components/Welcome';
import useIntersection from './hooks/useIntersection';

function App() {
  const storedLanguage = localStorage.getItem('language')
  const [language, setLanguage] = useState(storedLanguage)
  const [isVisible, addObserver] = useIntersection()
  const section  = useRef([])

  useEffect(()=> {
    section.current.map((sec)=> addObserver(sec, 0.7))
    console.log(isVisible)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Nav setLanguage={setLanguage} isVisible={isVisible} />
      </header>
      <div id="container" class="container">
        {language?
        <>
        <section id="home" ref={(el) => section.current.push(el)}>
        <Welcome />
          </section>
        <section id="about" ref={(el) => section.current.push(el)}>
        <Welcome />
        </section>

        <section id="projects" ref={(el) => section.current.push(el)}>
        <Welcome />
        </section>

        <section id="contact" ref={(el) => section.current.push(el)}>
        <Welcome />
        </section>
        </>
      :<PickLanguage setLanguage={setLanguage}/>}

      </div>
    </div>
  );
}

export default App;
