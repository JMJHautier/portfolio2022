import { ExpandedItem1, ExpandedItem2,ExpandedItem3, ExpandedItem3a, ExpandedItem3b } from "../../text/aboutCarrier"
const Expanded = ()=>{
return (<div className="AboutCarrier__extended">
      <div className="AboutCarrier__extended__wrapper"> 
        <div className="AboutCarrier__extended__item">
            <div className="extended__logo">
              <img src="./pictures/unesco.png" alt="Logo of UNESCO" />
            </div>
            <p>{ExpandedItem1}
            </p>
        </div>
      </div>

      <div className="AboutCarrier__extended__wrapper2"> 
        <div className="AboutCarrier__extended__item2">
            <div className="extended__logo">
              <img src="./pictures/logo_leadership_eftp.png" alt="Logo of Leadership Programme" />
            </div>
            <p>{ExpandedItem2}
            </p>
        </div>
      </div>

      <div className="AboutCarrier__extended__wrapper"> 
        <div className="AboutCarrier__extended__item3">
            <div className="extended__logo">
              <img src="./pictures/logo-pp.png" alt="Logo of the Promising Practices Database" />
            </div>
            <p>{ExpandedItem3}
            {ExpandedItem3a}
            {ExpandedItem3b}
            </p>
        </div>
      </div>


    </div>
)
}
export default Expanded