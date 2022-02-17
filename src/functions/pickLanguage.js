export const pickLanguage = (event, setLanguage) => {
  
  const {id, value} = event.target
  const language = id || value

  
  console.log({language})
  localStorage.setItem('language', language)

  setLanguage(language)
}

