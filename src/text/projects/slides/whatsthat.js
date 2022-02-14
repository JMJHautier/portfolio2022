import SetTranslate from "../../SetTranslate";
import ReactMarkdown from 'react-markdown'

const language= localStorage.getItem('language');

const content1 = {
FR:`En commençant mon apprentissage du code, j'ai réalisé que Google était mon meilleur ami... à condition de savoir quoi écrire dans la barre de recherche !  \n
La programmation a de très nombreux termes techniques que l'on apprend très progressivement.  *What's that* vise à accélérer le processus.  \n
**Les programmeurs débutants peuvent y partager leur code, y souligner un *tag*, un *key word*, un *object* etc. précis et demander à la communauté: What's that?**
`,

EN:``,
DE:``,
}

const content2 = {
  FR:`Avec la fonction *search*, les utilisateurs peuvent trouver des exemples dans la base de données, mais aussi des liens pertinents vers *Stack Overflow* et la MDN ! Intégrer *What's that* dans d'autres services d'aide et de support me semblait essentiel.   \n
  Pour une deuxième version, mon objectif est d'utiliser l'API de *stack-overflow* pour permettre des résultats plus personnalisés, et peut être créer en un clic un draft de question. 
  `,
  EN:``,
  DE:``,

}

const content3 = {
  FR:`Je voulais que l'utilisateur n'ait pas à checker le site pour s'avoir si sa question avait reçu une réponse. J'ai donc inclus **une notification par email**, activable pour chaque question posée.  \n
  La notification est envoyée via un middleware sur l'application back end.
  `,
  EN:``,
  DE:``,

}

const content4 = {
  FR:`Avec un temps limité pour développer cette application, j’ai décidé d’utiliser la *framework* Material-UI. Cela m’a permis de **créer un thème cohérent pour l’intégralité du site**, et de m’habituer à **utiliser des composants externes**, et de gérer leur interaction avec d’autres librairies populaires et avec mon propre code. 
  `,
  EN:``,
  DE:``,

}

 const slide1 = {
FR:{
  title: "L'idée",
  content: <ReactMarkdown>{content1[language]}</ReactMarkdown> ,
  pic: `./pictures/whatsthat/section1.png`, 
},
EN:``,
DE:``,
}

 const slide2 = {
  FR:{
    title: "Créer des liens avec d'autres sites d'entre-aides",
    content: <ReactMarkdown>{content2[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section1.png`, 
  },
  EN:``,
  DE:``,
  }

 const slide3 = {
  FR:{
    title: "Envoyer des notifications",
    content: <ReactMarkdown>{content3[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section1.png`, 
  },
  EN:``,
  DE:``,
  }

 const slide4 = {
  FR:{
    title: "Utiliser une framework CSS",
    content: <ReactMarkdown>{content4[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section1.png`, 
  },
  EN:``,
  DE:``,
  }

  export const tab1= slide1[language]
  export const tab2= slide2[language]
  export const tab3= slide3[language]
  export const tab4= slide4[language]
