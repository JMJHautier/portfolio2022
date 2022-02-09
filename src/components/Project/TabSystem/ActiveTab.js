import { CSSTransition } from "react-transition-group"

const ActiveTab = ({tab, transitionIsReset})=>{
  const {title, content} = tab
return (<div className="activeTab">
  <h1>{title}</h1>
  <CSSTransition in={transitionIsReset} timeout={800} classNames={{enter:"illustration-enter", enterActive:"illustration-enter-active", exit:"illustration-exit", exitActive:"illustration-exit-active"}} unmountOnExit>

  <p>{content} </p>
  </CSSTransition>
</div>)
}
export default ActiveTab