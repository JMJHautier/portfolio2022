import { CSSTransition } from "react-transition-group"

const Illustration = ({pic, title, transitionIsReset})=>{

return <div className="project__illustration">
  <h2>{title}</h2>
  <CSSTransition in={transitionIsReset} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}}>

  <div className="illustration_wrapper">
  <img src={pic} alt="illustration of project" />

  </div>
  </CSSTransition>

   </div>
}
export default Illustration