import ReactMarkdown from 'react-markdown'
import { useContext } from "react"
import {LanguageContext} from "../context/LanguageContext"

const SetTranslate = ({children})=>{
const {language} = useContext(LanguageContext)
console.log(children)
return <ReactMarkdown linkTarget="_blank">{children[language]}</ReactMarkdown>
}
export default SetTranslate

