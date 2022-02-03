import { useContext, useEffect, useRef, useState} from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import Content from './Content';
import { LanguageContext } from './context/LanguageContext';
import useIntersection from './hooks/useIntersection.ts';

function App() {
  const {language} = useContext(LanguageContext)
  const [currentSection, setCurrentSection] = useState()
  const [isVisible, addObserver, ratio, boundY] = useIntersection()
  // const [scrollUp, addScrollObserver] = useScrollY()
  // const steps = [0.05, 0.1, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

  const container = useRef()

  useEffect(()=>{
    if(ratio["home"]){
    const myValues = Object.keys(ratio)
    const maxKey = myValues.reduce(function(a,b) {return ratio[a]>ratio[b]?a:b})
    console.log(maxKey)
    setCurrentSection(maxKey)
    }
  }, [ratio])

  // useEffect(()=> {
  //   console.log(container.current)
  //   addScrollObserver(container.current, steps)
  // }, [])


  return (
    <div className="App" ref={container}>
      <header className="App-header">
      <Nav isVisible={isVisible} ratio={ratio} />
      </header>
      <div id="container" class="container">
        {language?
      <Content isVisible={isVisible} boundY={boundY} addObserver={addObserver} ratio={ratio} currentSection={currentSection}/>
      :<PickLanguage />}

      </div>
    </div>
  );
}

export default App;
