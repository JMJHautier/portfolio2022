import { useLocalStorage } from "../hooks/useStorage"
export const pickLanguage = (event) => {
  
  const {id, value} = event.target
  const language = id || value

  
  console.log({id})
  localStorage.setItem('language', language)
}

