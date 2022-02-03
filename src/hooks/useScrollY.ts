import { useState} from 'react'

const useScrollY = (element:Element, threshold:number|number[], rootMargin?:string)=>{
    const [boundClientY, setBoundClientY] = useState(0)
    const [previousBoundClientY, setPreviousBoundClientY] = useState(0)
    const [scrollUp, setScrollUp] = useState(false)

    const observeElement = (element:Element, threshold:number|number[], rootMargin?:string) => {
      
    const options = {
      threshold,
      rootMargin
      
    };

    const observer =
      new IntersectionObserver((entries, observer) => {
      entries.forEach(entry=> {
        setPreviousBoundClientY(entry.boundingClientRect.y)
      if(entry.boundingClientRect.y>boundClientY) {
        setScrollUp(false)
        setBoundClientY(entry.boundingClientRect.y)
      } else {
        setScrollUp(true)
        setBoundClientY(entry.boundingClientRect.y)
      }
    })}
    , options)
  
    observer.observe(element)
    }
  
return [scrollUp, observeElement]
}
export default useScrollY