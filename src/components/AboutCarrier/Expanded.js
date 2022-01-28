import { ExpandedItem1, ExpandedItem2,ExpandedItem3, ExpandedItem3a, ExpandedItem3b, AllItem3 } from "../../text/aboutCarrier"
import Bubble from "../Bubble/Bubble"
const Expanded = ()=>{
  const expandedItem3 =`${ExpandedItem3} ${ExpandedItem3a} ${ExpandedItem3b}`
  console.log(ExpandedItem2)
  
return ( 
 <div className="AboutCarrier__extended">

      <div className="AboutCarrier__extended__wrapper"> 
        <Bubble picture="./pictures/unesco.png" text={ExpandedItem1} />
      </div>
      <div className="AboutCarrier__extended__wrapper2"> 
        <Bubble picture='./pictures/logo_leadership_eftp.png' alt="Logo of Leadership Programme" text={ExpandedItem2} />
      </div>

      <div className="AboutCarrier__extended__wrapper3"> 
        <Bubble picture="./pictures/logo-pp.png" alt='extended__logo' text={AllItem3} />
      </div>


    </div>
)
}
export default Expanded