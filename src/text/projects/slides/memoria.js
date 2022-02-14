import SetTranslate from "../../SetTranslate";
import ReactMarkdown from 'react-markdown'

const language= localStorage.getItem('language');

const content1 = {
FR:`Avec *memOria*, nous voulions une application pour mémoriser facilement des mots clés, des concepts, ou certaines syntaxes particulières. \n
Il y a de nombreuses applications de cartes de révision, mais aucune ne convenait : soit elle ne permettait pas d'ajouter du code avec coloration syntaxique (quizzlet, anki), soit elles étaient payantes (mem.dev).   \n
memOria est gratuit, et permet de créer ses paquets, de les parcourir, de marquer les cartes maitrisées et non maitrisées etc.`,

EN:``,
DE:``,
}

const content2 = {
  FR:`L'éditeur de *markdown* permet d'être créatif - *code snippet*, mais aussi images, *gifs* sont possibles ! **Afficher au mieux tous ces contenus est un challenge**, en desktop comme en mobile.   \n
  J'utilise un mélange de *media queries*, d'unités relatives, et des *rules*  les plus récentes de CSS tels que *clamp(*) pour que tous les types de contenus soient lisibles, tout en gardant un code propre. 
  `,
  EN:``,
  DE:``,

}

const content3 = {
  FR:`Inutile de réinventer la roue ! L'application utilise un éditeur de *markdown* externe et open source. Bien sûr, il a fallu **comprendre son fonctionnement pour construire par-dessus** des fonctionnalités supplémentaires. Je suis également le repo de cette librairie sur *Github*, afin d'être au courant au plus tôt en cas de **faille de sécurité** ou de nouvelles fonctionnalités permettant d'améliorer l'expérience utilisateur. `,
  EN:``,
  DE:``,

}

const content4 = {
  FR:`De nombreux composants sont réutilisés à plusieurs endroits de l’application : par exemple, la carte est utilisée pour les cartes de révision, mais aussi pour les messages d’erreur, la présentation de l’équipe etc.   \n
  Il était donc important de **modulariser le code** autant que possible pour faciliter sa réutilisation.
  `,
  EN:``,
  DE:``,

}

 const slide1 = {
FR:{
  title: "L'idée",
  content: <ReactMarkdown>{content1[language]}</ReactMarkdown> ,
  pic: `./pictures/memoria/section1.png`, 
},
EN:``,
DE:``,
}

 const slide2 = {
  FR:{
    title: "S'adapter à des contenus divers",
    content: <ReactMarkdown>{content2[language]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section1.png`, 
  },
  EN:``,
  DE:``,
  }

 const slide3 = {
  FR:{
    title: "Travailler avec des librairies externes",
    content: <ReactMarkdown>{content3[language]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section1.png`, 
  },
  EN:``,
  DE:``,
  }

 const slide4 = {
  FR:{
    title: "Développer des composants réutilisables",
    content: <ReactMarkdown>{content4[language]}</ReactMarkdown> ,
    pic: `./pictures/memoria/section1.png`, 
  },
  EN:``,
  DE:``,
  }

  export const tab1= slide1[language]
  export const tab2= slide2[language]
  export const tab3= slide3[language]
  export const tab4= slide4[language]
