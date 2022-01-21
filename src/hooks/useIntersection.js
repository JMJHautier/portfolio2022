import { useState } from "react";

const useIntersection = (element, threshold)=>{

  const [isVisible, setIsVisible] = useState({})
  const [ratio, setRatio] = useState({})

  const observeElement = (element, threshold, rootMargin) => {
    
  const options = {

    threshold,
    rootMargin
    
  };
  const observer =
    new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=> {
      
    setRatio((prevState => ({...prevState, [entry.target.id]: entry.intersectionRatio})))
      
    if(entry.isIntersecting) {
    setIsVisible((prevState)=>({...prevState, [entry.target.id]:true }))
    console.log(entry)
  }
  else {
    setIsVisible((prevState)=>({...prevState, [entry.target.id]:false }))
    console.log(entry)
  }
    })
  }, options)

  observer.observe(element)
  }


return  [isVisible, observeElement, ratio]
}
export default useIntersection