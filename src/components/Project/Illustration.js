import { CSSTransition } from "react-transition-group"
import TransparentButton from "../Buttons/Transparent"

const Illustration = ({pic, title, transitionIsReset, switchToggle})=>{

return <div className="project__illustration">
  <CSSTransition in={transitionIsReset} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}}>

  <div className="illustration_wrapper">
  <img src={pic} alt="illustration of project" />

  </div>
  </CSSTransition>

   </div>
}
export default Illustration