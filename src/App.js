import { useEffect, useState } from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import {hello} from './text/welcome'

function App() {
  const storedLanguage = localStorage.getItem('language')
  const [language, setLanguage] = useState(storedLanguage)


  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <div class="container">
        {language?
        <h2> {hello[`${language}`]}</h2>
      :<PickLanguage/>}

      </div>
    </div>
  );
}

export default App;
