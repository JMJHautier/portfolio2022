import { useContext} from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import Content from './Content';
import { LanguageContext } from './context/LanguageContext';
import useIntersection from './hooks/useIntersection.ts';

function App() {
  const {language} = useContext(LanguageContext)
  const [isVisible, addObserver, ratio] = useIntersection()

  return (
    <div className="App">
      <header className="App-header">
      <Nav isVisible={isVisible} ratio={ratio} />
      </header>
      <div id="container" class="container">
        {language?
      <Content isVisible={isVisible} addObserver={addObserver}/>
      :<PickLanguage />}

      </div>
    </div>
  );
}

export default App;
