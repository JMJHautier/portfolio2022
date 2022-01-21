import useToggle from "../../hooks/useToggle"
import MenuItem from "./MenuItems"

const NavMobile = ({isVisible})=>{
  const [showSideBar, toggleSideBar ] = useToggle(false)

return (showSideBar?
  <div className="navMobile__SideBar"> 
  <button onClick={toggleSideBar}>X</button>
   <MenuItem isVisible={isVisible} />
  </div>
  :
        <button onClick={toggleSideBar} className="navMobile__burger">
        <div></div>
        <div></div>
        <div></div>
      </button>
)
}
export default NavMobile