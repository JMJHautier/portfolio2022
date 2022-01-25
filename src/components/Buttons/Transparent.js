import classNames from 'classnames'
import './Buttons.scss'

const TransparentButton = ({children, className="", onClick})=>{
  const allClasses = classNames({
    [className]: true,
    transparentButton: true

  })
return <button onClick={onClick} className={allClasses}>{children} </button>
}
export default TransparentButton