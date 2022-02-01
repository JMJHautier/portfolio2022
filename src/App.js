import { useContext, useEffect, useState} from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import Content from './Content';
import { LanguageContext } from './context/LanguageContext';
import useIntersection from './hooks/useIntersection.ts';

function App() {
  const {language} = useContext(LanguageContext)
  const [currentSection, setCurrentSection] = useState()
  const [isVisible, addObserver, ratio] = useIntersection()

  useEffect(()=>{
    if(ratio["home"]){
    const myValues = Object.keys(ratio)
    const maxKey = myValues.reduce(function(a,b) {return ratio[a]>ratio[b]?a:b})
    console.log(maxKey)
    setCurrentSection(maxKey)
    }
  }, [ratio])



  return (
    <div className="App">
      <header className="App-header">
      <Nav isVisible={isVisible} ratio={ratio} />
      </header>
      <div id="container" class="container">
        {language?
      <Content isVisible={isVisible} addObserver={addObserver} ratio={ratio} currentSection={currentSection}/>
      :<PickLanguage />}

      </div>
    </div>
  );
}

export default App;
