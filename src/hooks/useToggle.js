import { useState } from "react"

const useToggle = (defaultValue)=>{
  const [toggle, setToggle] = useState(defaultValue)
  const switchToggle = () => {
    setToggle((prevState)=>!prevState)
  }
return [toggle, switchToggle]
}

export default useToggle
