import { useEffect, useState } from 'react';
import './App.scss';
import Nav from './components/Nav'
import PickLanguage from './components/PickLanguage';
import Welcome from './components/Welcome';
function App() {
  const storedLanguage = localStorage.getItem('language')
  const [language, setLanguage] = useState(storedLanguage)
  return (
    <div className="App">
      <header className="App-header">
      <Nav setLanguage={setLanguage}/>
      </header>
      <div class="container">
        {language?
        <>
        <Welcome />
        <Welcome />
        </>
      :<PickLanguage setLanguage={setLanguage}/>}

      </div>
    </div>
  );
}

export default App;
