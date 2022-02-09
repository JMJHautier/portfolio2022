import './Contact.scss'

const Contact = ()=>{
  const handleSubmit = (event) => {
event.preventDefault()
  }
return (<div className="contact__container">
    <h2 className="sectionTitle">Get in Touch!</h2>
  <div className="contact__content"> 
  <form onSubmit={handleSubmit} action="https://public.herotofu.com/v1/77b78dd0-89a5-11ec-9849-fb4467695b96" method="post">
<div>
  <label for="name">Your Name</label>
  <input name="name" id="name" type="text" required />
</div>
<div>
  <label for="email">Your Email</label>
  <input name="email" id="email" type="email" required  />
</div>
<div>
  <label for="message">Your Message </label>
  <textarea name="message" id="email" required  />
 
</div>
<div>
  <input type="submit" value="Download CTA" />
</div>
</form>
</div>
</div>)
}
export default Contact