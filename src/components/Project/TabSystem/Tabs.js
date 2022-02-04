const Tabs = ({tabs, handleChangeTab})=>{
return <div className="tabs__container">
  {tabs.map((tab, index)=><h3 onClick={handleChangeTab} id={index} key={tab.title}>{tab.title}</h3>)}

</div>
}
export default Tabs