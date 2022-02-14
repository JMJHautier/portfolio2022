import { useState } from "react"

const useToggle = (defaultValue)=>{
  const [toggle, setToggle] = useState(defaultValue)
  const switchToggle = (value) => {

    setToggle((prevState)=>!prevState)
  }
return [toggle, switchToggle, setToggle]
}

export default useToggle
