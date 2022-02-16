import { title, content, name, email, message } from '../../text/contact'
import { send } from '../../text/buttons'
import './Contact.scss'

const Contact = ()=>{
  const handleSubmit = (event) => {
event.preventDefault()
  }
return (<div className="contact__container">
    <h2 className="sectionTitle">{title}</h2>
    <div className="projects__intro"><p>{content}</p></div>
  <div className="contact__content"> 
  <form onSubmit={handleSubmit} action="https://public.herotofu.com/v1/77b78dd0-89a5-11ec-9849-fb4467695b96" method="post">
<div>
  <label for="name">{name}</label>
  <input name="name" id="name" type="text" required />
</div>
<div>
  <label for="email">{email}</label>
  <input name="email" id="email" type="email" required  />
</div>
<div>
  <label for="message">{message} </label>
  <textarea name="message" id="email" required  />
 
</div>
<div>
  <button type="submit">{send}</button>
</div>
</form>
</div>
</div>)
}
export default Contact