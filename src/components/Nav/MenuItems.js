import { home, about, projects, contact} from '../../text/nav'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const MenuItem = ({isVisible})=>{
  const language = localStorage.getItem("language")
  const [current, setCurrent] = useState("home")

  const menuItems = useRef()
  const getStyle = (elementId) => {
    
    const itemStyle = classNames({
      nav__item: true,
      "nav__item--active": isVisible[elementId]
    })

    return itemStyle
  }

  
return <><a href="#home" className={getStyle("home")} ref={(el)=> menuItems?.current?.push(el)}>{home[language]}</a>
<a href="#about" className={getStyle("about")} ref={(el)=> menuItems?.current?.push(el)}>{about[language]}</a>
<a href="#projects" className={getStyle("projects")} ref={(el)=> menuItems?.current?.push(el)}>{projects[language]}</a>
<a href="#contact" className={getStyle("contact")} ref={(el)=> menuItems?.current?.push(el)}>{contact[language]}</a>
</>
}
export default MenuItem


// const offset = window.pageYOffset

  //! Option 1
  // const [offset, setOffset] = useState(null);

  // const setScroll = () => {
  //   setOffset(window.scrollY);
  //   console.log(offset)
  // };

  // useEffect(()=>{
  //   let scroll = window.scrollY
  //   setOffset(scroll)
  //   console.log(offset)
  // }, [offset, window.scrollY])


  // useEffect(() => {
  //   const container = document.getElementById("container")
  //   container.addEventListener("scroll", setScroll);
  //   const scrollY= window.scrollY
  //   console.log({container, scrollY})
  //   return () => {
  //     container.removeEventListener("scroll", setScroll);
  //   };
  // }, []);

  //! option 2
//   useEffect(()=> {
// const sections = document.querySelectorAll("section");
// const navItems = document.querySelectorAll(".nav__item");
// console.log({sections})
// const onScroll = () => {
//   setOffset(window.scrollY)
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
//       setCurrent(section.getAttribute("id"));
//       console.log(current)
//     }
//     console.log({sectionTop, sectionHeight, offset})
//   });
//     }
// window.addEventListener("scroll", onScroll)
  
// return ()=> window.removeEventListener("scroll")

// }, [])

  // const itemStyle = () => {
    
  //   classNames({
  //   nav__item: true,
  //   "nav__item--active": ()=> {

  //   }
  // }, [])