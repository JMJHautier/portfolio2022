import classNames from 'classnames'
import './Buttons.scss'

const TransparentButton = ({children, className="", onClick, showBorder = false})=>{
  const allClasses = classNames({
    [className]: true,
    transparentButton: true,
    "transparentButton__border": showBorder

  })
return <button onClick={onClick} className={allClasses}>{children} </button>
}
export default TransparentButton