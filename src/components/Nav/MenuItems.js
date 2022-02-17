import { home, about, projects, contact} from '../../text/nav'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const MenuItem = ({isVisible, ratio})=>{
  const language = localStorage.getItem("language")

  const menuItems = useRef()

  useEffect(()=> {
    const myitems = document.querySelectorAll(".nav__item")
    console.log({myitems})

    myitems.forEach((item)=> {
      
      const myItem = Object.fromEntries(Object.entries(isVisible).filter(([key, value]) => value))
      const myRealItem = Object.fromEntries(Object.entries(myItem).filter(([key, value]) => key !== "about2"))
      console.log({myRealItem})
      if(myItem[item.name]&&Object.keys(myRealItem).length === 1){
        item.style.filter = `brightness(100%)`

      }
      else {
      if(isVisible["about"] || isVisible["about2"]) {

        if(ratio[item.name]>0.1) {
          item.style.filter = `brightness(${ratio[item.name]})`
        }
        else {
          item.style.filter = `brightness(100%)`
        }
      } else {
        if(ratio[item.name]>0.3) {
          item.style.filter = `brightness(${ratio[item.name]})`
        }
        else {
          item.style.filter = `brightness(100%)`
        }
      }
      }
      // if(ratio[item.name] > 0.3) {
      //   if(myItem[item.name]&& Object.keys(myRealItem).length === 1)
      //   {
      //     console.log(Object.keys(myRealItem).length)
      //     item.style.filter = 'brightness(1)'
      //   }
      //   else {
      // item.style.filter = `brightness(${ratio[item.name]})`
      //   }
      // }
      // else {
      //   item.style.filter = `brightness(100%)`
      //   // item.classList

      // }
    })
  }, [ratio])

  const getStyle = (elementId) => {
    
    const itemStyle = classNames({
      nav__item: true,
      "nav__item--active": isVisible[elementId] && ratio[elementId] >0.3
    })

    return itemStyle
  }

  
return <><a href="#home" className={getStyle("home")} ref={(el)=> menuItems?.current?.push(el)}>{home[language]}</a>
<a href="#about" name="about" className={getStyle("about")} ref={(el)=> menuItems?.current?.push(el)}>{about[language]}</a>
<a href="#projects" name="projects" className={getStyle("projects")} ref={(el)=> menuItems?.current?.push(el)}>{projects[language]}</a>
<a href="#contact" name="contact" className={getStyle("contact")} ref={(el)=> menuItems?.current?.push(el)}>{contact[language]}</a>
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