import ReactMarkdown from 'react-markdown'
import { useContext } from "react"
import {LanguageContext} from "../context/LanguageContext"
import { Fragment } from 'react'
import remarkBreaks from 'remark-breaks'

const SetTranslate = ({children})=>{
const {language} = useContext(LanguageContext)
console.log(children)
return <ReactMarkdown parserOptions={{ commonmark: true }} remarkPlugins={[remarkBreaks]} linkTarget="_blank" components={{p:Fragment}}>{children[language]}</ReactMarkdown>
}
export default SetTranslate

