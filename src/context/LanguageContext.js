import {createContext, useEffect, useState} from 'react';

export const LanguageContext = createContext();

const LanguageState = ({children}) => {
   const [language, setLanguage] = useState()
   const storedLanguage = localStorage.getItem('language')
   useEffect(()=> {
   setLanguage(storedLanguage)
   }, [])
   return (<LanguageContext.Provider value={{language, setLanguage, storedLanguage}}>
      {children}
   </LanguageContext.Provider>)
}

export default LanguageState 