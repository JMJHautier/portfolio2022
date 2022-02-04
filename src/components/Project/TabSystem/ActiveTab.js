const ActiveTab = ({tab})=>{
  const {title, content} = tab
return (<div className="activeTab">
  <h1>{title}</h1>
  <p>{content} </p>
</div>)
}
export default ActiveTab