import ReactMarkdown from 'react-markdown'

const language= localStorage.getItem('language')

const content1 = {
FR:`En commençant mon apprentissage du code, j'ai réalisé que Google était mon meilleur ami... à condition de savoir quoi écrire dans la barre de recherche !  \n
La programmation a de très nombreux termes techniques que l'on apprend très progressivement.  *What's that* vise à accélérer le processus.  \n
**Les programmeurs débutants peuvent y partager leur code, y souligner un *tag*, un *key word*, un *object* etc. précis et demander à la communauté: What's that?**
`,

EN:`When I started learning to code, I realised that *Google* is my best friend.... provided I know what to type in the search bar.   \n
The programming world contains a lot of technical terms that can only be learned gradually. What’s that aims to speed up this process.  \n
**Prospective programmers can share their code here, highlight a particular tag, keyword, object, etc. and ask the community: What's that?**   \n
`,
DE:`Als ich mit dem Lernen von Codierungen begonnen habe, ist mir klar geworden, dass *Google* mein bester Freund ist... vorausgesetzt, ich weiß, was ich in die Suchleiste schreiben soll.  \n
Die Programmierwelt beinhaltet sehr viele Fachbegriffe, die man nur allmählich lernt. What's that zielt darauf ab, diesen Prozess zu beschleunigen.  \n
**Angehende Programmierer können hier ihren Code teilen, ein bestimmtes Tag, Schlüsselwort, Objekt usw. hervorheben und die Community fragen: What's that?**
`,
}

const content2 = {
  FR:`Avec la fonction *search*, les utilisateurs peuvent trouver des exemples dans la base de données, mais aussi des liens pertinents vers *Stack Overflow* et la MDN ! Intégrer *What's that* dans d'autres services d'aide et de support me semblait essentiel.   \n
  Pour une deuxième version, mon objectif est d'utiliser l'API de *stack-overflow* pour permettre des résultats plus personnalisés, et peut être créer en un clic un draft de question. 
  `,
  EN:`With the search function, users can find examples in the database, but also relevant links to *Stack Overflow* and *MDN*. The integration of *What’s that* into other services seemed important to me.  \n
  For a second version, my goal is to use *Stack-Overflow'*s API to enable personalised results and perhaps create a question draft with one click. 
  `,
  DE:`Mit der *Suchfunktion* können die Nutzer Beispiele in der Datenbank finden, aber auch relevante Links zu Stack Overflow und MDN. Die Integration von *What's that* in andere Hilfs- und Unterstützungsdienste erschien mir wichtig.  \n
  Für eine zweite Version ist es mein Ziel, die *API* von *Stack Overflow* zu nutzen, um personalisierte Ergebnisse zu ermöglichen und vielleicht mit einem Klick einen Frage-Draft zu erstellen. 
  `,

}

const content3 = {
  FR:`Je voulais que l'utilisateur n'ait pas à checker le site pour s'avoir si sa question avait reçu une réponse. J'ai donc inclus **une notification par email**, activable pour chaque question posée.  \n
  La notification est envoyée via un middleware sur l'application back end.
  `,
  EN:`I wanted to spare the user from actively checking if their question has been answered. Therefore, I included **an email notification** that can be activated for each question.   \n
  The notification is sent via middleware to the back-end application in *node.js*.`,
  DE:`Ich wollte nicht, dass der Nutzer erst aktiv auf die Seite gehen muss, um zu überprüfen, ob seine Frage beantwortet worden ist. Daher habe ich eine E-Mail-Benachrichtigung eingebaut, die für jede gestellte Frage aktiviert werden kann.  \n
  Die Benachrichtigung wird über eine Middleware an die Backend-Anwendung in *node.js* gesendet.
  `,

}

const content4 = {
  FR:`Avec un temps limité pour développer cette application, j’ai décidé d’utiliser la *framework* Material-UI. Cela m’a permis de **créer un thème cohérent pour l’intégralité du site**, et de m’habituer à **utiliser des composants externes**, et de gérer leur interaction avec d’autres librairies populaires et avec mon propre code. 
  `,
  EN:`Since I had limited time to develop this application, I decided to use the *Material-UI framework*. This allowed me to create **a consistent design for the entire website**, get used to using external components, manage their interaction with other popular libraries as well as with my own code.`,
  DE:`Da ich nur wenig Zeit für die Entwicklung dieser Anwendung hatte, habe ich mich für die Verwendung des MaterialUI-Frameworks entschieden. Dadurch konnte ich **ein einheitliches Design für die gesamte Website** erstellen, mich an die Verwendung externer Komponenten gewöhnen, deren Interaktion mit anderen populären *libraries* sowie meinen eigenen Code verwalten.`,

}

 const slide1 = {
FR:{
  title: "L'idée",
  content: <ReactMarkdown>{content1[language]}</ReactMarkdown> ,
  pic: `./pictures/whatsthat/section1.gif`, 
},
EN:{
  title: "The idea",
  content: <ReactMarkdown>{content1[language]}</ReactMarkdown> ,
  pic: `./pictures/whatsthat/section1.gif`, 
},
DE:{
  title: "Die Idee",
  content: <ReactMarkdown>{content1[language]}</ReactMarkdown> ,
  pic: `./pictures/whatsthat/section1.gif`, 
},
}

 const slide2 = {
  FR:{
    title: "Créer des liens avec d'autres sites d'entre-aides",
    content: <ReactMarkdown>{content2[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section2.gif`, 
  },
  EN:{
    title: "Establish links to other learning platforms",
    content: <ReactMarkdown>{content2[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section2.gif`, 
  },
  DE:{
    title: "Links zu anderen Websites für gegenseitige Hilfe herstellen",
    content: <ReactMarkdown>{content2[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section2.gif`, 
  },
  }

 const slide3 = {
  FR:{
    title: "Envoyer des notifications",
    content: <ReactMarkdown>{content3[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section3.gif`, 
  },
  EN:{
    title: "Push notifications",
    content: <ReactMarkdown>{content3[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section3.gif`, 
  },
  DE:{
    title: "Push-Benachrichtigungen",
    content: <ReactMarkdown>{content3[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section3.gif`, 
  },
  }

 const slide4 = {
  FR:{
    title: "Utiliser une framework CSS",
    content: <ReactMarkdown>{content4[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section4.png`, 
  },
  EN:{
    title: "Use a CSS framework",
    content: <ReactMarkdown>{content4[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section4.png`, 
  },
  DE:{
    title: "Ein CSS-Framework verwenden",
    content: <ReactMarkdown>{content4[language]}</ReactMarkdown> ,
    pic: `./pictures/whatsthat/section4.png`, 
  },
  }

  export const tab1= slide1[language]
  export const tab2= slide2[language]
  export const tab3= slide3[language]
  export const tab4= slide4[language]
