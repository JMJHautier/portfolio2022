import { home, about, projects, contact} from '../../text/nav'

const MenuItem = ()=>{
  const language = localStorage.getItem("language")
return <><li>{home[language]}</li>
<li>{about[language]}</li>
<li>{projects[language]}</li>
<li>{contact[language]}</li>
</>
}
export default MenuItem