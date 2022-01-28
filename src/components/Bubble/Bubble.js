import './Bubble.scss'

const Bubble = ({picture, text})=>{
return (<div className="bubbleItem">
<div className="extended__logo">
  <img src={picture} alt="Logo of UNESCO" />
</div>
<p>{text}
</p>
</div>
)
}
export default Bubble