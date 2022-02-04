const Illustration = ({pic, title})=>{

return <div className="project__illustration">
  <h2>{title}</h2>
  <div className="illustration_wrapper">
    <img src={pic} alt="illustration of project" />
  </div>
   </div>
}
export default Illustration