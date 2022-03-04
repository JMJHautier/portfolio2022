import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'

const language= localStorage.getItem('language')
console.log({language})
const content1 = {
FR:`Avec *memOria*, nous voulions une application pour mémoriser facilement des mots clés, des concepts, ou certaines syntaxes particulières. \n
Il y a de nombreuses applications de cartes de révision, mais aucune ne convenait : soit elle ne permettait pas d'ajouter du code avec coloration syntaxique (quizzlet, anki), soit elles étaient payantes (mem.dev).   \n
memOria est gratuit, et permet de créer ses paquets, de les parcourir, de marquer les cartes maitrisées et non maitrisées etc.`,

EN:`With *memOria*, we wanted to create a flashcard application that made it easier to retain, repeat and thus learn important terms, concepts or syntax.  \n
There are many flashcard apps, but none were suitable for me: Either they do not allow you to add coding with syntax highlighting (quizzlet, anki), or they ask for a fee (mem.dev).   \n
memOria is free and allows you to create your learning decks, browse them, mark learned and unlearned cards, etc. 
`,
DE:`Mit *memOria* wollten wir eine Lernkarteien-Anwendung kreieren, mit der man wichtige Begriffe, Konzepte oder bestimmte Programmier-Codes leichter festhalten, wiederholen und somit lernen kann.  \n
Es gibt viele Lernkarten-Apps, aber keine war für mich geeignet: Entweder erlaubten sie es nicht, Codierungen mit Syntaxhervorhebung hinzuzufügen (quizzlet, anki), oder sie waren kostenpflichtig (mem.dev).   \n
*memOria* ist kostenlos und ermöglicht es, seine Lernpakete zu erstellen, sie zu durchsuchen, erlernte und nicht erlernte Karten zu markieren etc.

`,
}

const content2 = {
  FR:`L'éditeur de *markdown* permet d'être créatif - *code snippet*, mais aussi images, *gifs* sont possibles ! **Afficher au mieux tous ces contenus est un challenge**, en desktop comme en mobile.   \n
  J'utilise un mélange de *media queries*, d'unités relatives, et des *rules*  les plus récentes de CSS tels que *clamp(*) pour que tous les types de contenus soient lisibles, tout en gardant un code propre. 
  `,
  EN:`The *Markdown editor* allows you to be creative - *code snippets*, but also images as well as gifs are possible.   \n
  **Displaying all this content in the best possible way** on both desktop and mobile devices is a **challenge**. I used *media queries*, relative units and the latest CSS rules like *clamp()* to make all types of content easy to read while keeping the code clean. 
  `,
  DE:`Der *Markdown-Editor* erlaubt es, kreativ zu sein - *Code Snippets*, aber auch Bilder sowie Gifs sind möglich.  \n
  All diese Inhalte sowohl auf dem Desktop als auch auf mobilen Geräten bestmöglich anzuzeigen, ist eine Herausforderung. Ich habe eine Mischung aus *Media Queries*, relativen Einheiten und den neuesten CSS-Rules wie *clamp()* verwendet, um alle Arten von Inhalten leicht lesbar zu machen und gleichzeitig den Code sauber zu erhalten. 
  `,

}

const content3 = {
  FR:`Inutile de réinventer la roue ! L'application utilise un éditeur de *markdown* externe et open source. Bien sûr, il a fallu **comprendre son fonctionnement pour construire par-dessus** des fonctionnalités supplémentaires. Je suis également le repo de cette librairie sur *Github*, afin d'être au courant au plus tôt en cas de **faille de sécurité** ou de nouvelles fonctionnalités permettant d'améliorer l'expérience utilisateur. `,
  EN:`No need to reinvent the wheel: The application uses an external open-source Markdown editor. Of course, I needed to understand its functionality in order to build on additional features. I continue to follow the *library* on Github to stay informed about **security vulnerabilities** or new features to improve the user experience.`,
  DE:`Nicht nötig, das Rad neu zu erfinden: Die Anwendung basiert auf einem externen *Open-Source*-*Markdown-Editor*. Natürlich mussten wir seine Funktionsweise verstehen, um auf deren Grundlage zusätzliche Funktionen aufzubauen. Ich verfolge die *library* weiterhin auf *Github*, um so früh wie möglich über **Sicherheitslücken** oder neue Funktionen zur Verbesserung der Nutzererfahrung informiert zu sein.`,

}

const content4 = {
  FR:`De nombreux composants sont réutilisés à plusieurs endroits de l’application : par exemple, la carte est utilisée pour les cartes de révision, mais aussi pour les messages d’erreur, la présentation de l’équipe etc.   \n
  Il était donc important de **modulariser le code** autant que possible pour faciliter sa réutilisation.
  `,
  EN:`Many components are reused in several places in the application: The card model is used for example for the revision cards but also for error messages, the team presentation, etc.  \n
  It was therefore important to **modularise the code** as much as possible to facilitate its reuse.`,
  DE:`Viele Komponenten werden an mehreren Stellen der Anwendung wiederverwendet: Das Modell der Karte wird z.B. für die Revisionskarten verwendet, aber auch für Fehlermeldungen, die Teampräsentation etc.  \n
  Daher war es wichtig, den Code so weit wie möglich zu **modularisieren**, um seine Wiederverwendung zu erleichtern.
  `,

}

 const slide1 = {
FR:{
  title: "L’idée",
  content: <ReactMarkdown>{content1["FR"]}</ReactMarkdown> ,
  pic: `./pictures/memoria/section1.gif`, 
},
EN:{
  title: "The idea",
  content: <ReactMarkdown>{content1["EN"]}</ReactMarkdown> ,
  pic: `./pictures/memoria/section1.gif`, 
},
DE:{
  title: "Die Idee",
  content: <ReactMarkdown>{content1["DE"]}</ReactMarkdown> ,
  pic: `./pictures/memoria/section1.gif`, 
},
}

 const slide2 = {
  FR:{
    title: "Travailler avec des librairies externes",
    content: <ReactMarkdown>{content3["FR"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section2.gif`, 
  },
  EN:{
    title: "Working with external libraries",
    content: <ReactMarkdown>{content3["EN"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section2.gif`, 
  },
  DE:{
    title: "Arbeiten mit externen Bibliotheken",
    content: <ReactMarkdown>{content3["DE"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section2.gif`, 
  },
  }

 const slide3 = {
  FR:{
    title: "S'adapter à des contenus divers",
    content: <ReactMarkdown>{content2["FR"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section3.gif`, 
  },
  EN:{
    title: "Adapt to different content",
    content: <ReactMarkdown>{content2["EN"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section3.gif`, 
  },
  DE:{
    title: "Sich an verschiedene Inhalte anpassen",
    content: <ReactMarkdown>{content2["DE"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section3.gif`, 
  },
  }

 const slide4 = {
  FR:{
    title: "Développer des composants réutilisables",
    content: <ReactMarkdown>{content4["FR"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section4.gif`, 
  },
  EN:{
    title: "Develop reusable components",
    content: <ReactMarkdown>{content4["EN"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section4.gif`, 
  },
  DE:{
    title: "Wiederverwendbare Komponenten entwickeln",
    content: <ReactMarkdown>{content2["DE"]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section4.gif`, 
  },
  }

  export const useTabs =()=> {
    const language = useContext(LanguageContext)
    const [tabs, setTabs] = useState()

    useEffect(()=> {
      setTabs({
        tab1: slide1[language],
        tab2: slide1[language],
        tab3: slide1[language],
        tab4: slide1[language]
      })

    }, [language])

    return [tabs]
  }
  export const tab1= slide1
  export const tab2= slide2
  export const tab3= slide3
  export const tab4= slide4
