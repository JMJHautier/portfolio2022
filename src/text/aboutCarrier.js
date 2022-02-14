import SetTranslate from "./SetTranslate";

export const title = (<SetTranslate>
{{
FR:`Ma première carrière`,
EN:`My first career`,
DE:`Erste berufliche Laufbahn`,
}}
</SetTranslate>)
export const content = (<SetTranslate>   
  {{
  FR: `Le développement est ma deuxième carrière ! \n\n J’ai d’abord obtenu un master en Scienes politiques, puis, de e 2015 à 2021, travaillé pour **l’UNESCO**. J’organisais des conférences et coordonnaient des publications et *ressources en ligne.*, qui m’ont donné envie de me reconvertir dans le développement web!`, 
  EN:`Web development is my second career choice: I first completed a Master’s degree in Political Sciences then worked for UNESCO from 2015 to 2021. I was organising conferences and coordinating publications and online resources – the latter motivating me to retrain in web development!`,
  DE:`Die Web-Entwicklung ist meine zweite berufliche Laufbahn: Ich habe meinen Master in den Politikwissenschaften an der Universität Science Po Toulouse gemacht.  \n 
  Anschließend habe ich von 2015 bis 2021 für UNESCO gearbeitet, wo ich Konferenzen organisiert und Veröffentlichungen sowie Online-Ressourcen koordiniert habe - Diese haben mich motiviert, in die Webentwicklung einzusteigen.
  `
}}
</SetTranslate>)

export const ExpandedItem1 = (<SetTranslate>
{{
FR:`A l’UNESCO, mon travail était de **faciliter la collaboration internationale** entre universités, centres de formations, ministères etc. du monde entier dans le domaine de l’éducation et la formation technique et professionnelle`,
EN:`My task was to **foster international cooperation** between universities, training centres, ministries, etc. from all over the world and to facilitate their communication.`,
DE:`Meine Aufgabe war es, die internationale Zusammenarbeit zwischen Universitäten, Ausbildungszentren, Ministerien usw. aus der ganzen Welt zu koordinieren und deren Kommunikation zu erleichtern.`,
}}
</SetTranslate>)

export const ExpandedItem2 = (<SetTranslate>
{{
FR:`J'organisais des ateliers de leadership et de networking pour des hauts fonctionnaires, des chercheurs, des chefs d'établissement, et les aidais à travailler ensemble sur des projets liés au développement durable, à l’égalité des chances etc`,
EN:`I have organised leadership and networking workshops for senior public service officials, academics and school headmasters, helping them to work together on projects dealing with sustainable development, equal opportunities, etc.`,
DE:`Ich habe Führungs- und Networking-Workshops für hohe Funktionäre des öffentlichen Dienstes, Wissenschaftler und Schulleitungen organisiert und sie dabei unterstützt, gemeinsam an Projekten zu arbeiten, die sich mit nachhaltiger Entwicklung, Chancengleichheit usw. befassen.`,
}}
</SetTranslate>)

export const ExpandedItem3 = (<SetTranslate>
{{
FR:`J’ai aussi, en collaboration avec des développeurs, conçu des services webs!   \n`,
EN:`I have furthermore worked with developers and conceptualized web services:   \n`,
DE:`Ich habe zudem mit Entwicklern zusammengearbeitet und Webservices entworfen:   \n`,
}}
</SetTranslate>)

export const ExpandedItem3a = (<SetTranslate>
{{
FR:`&#707;**Deux bases de données:** une compilant des [pratiques prometteuses](https://unevoc.unesco.org/home/Promising+Practices+in+TVET), une autre de [termes utilisés à l’international]( https://unevoc.unesco.org/home/TVETipedia+Glossary).  \n`,
EN:`&#707;**Two databases**: one presenting [Promising Practices](https://unevoc.unesco.org/home/Promising+Practices+in+TVET),  and a second [summarising the international terminology](https://unevoc.unesco.org/home/TVETipedia+Glossary) of the education sector to provide a common language for supranational communication.   \n`,
DE:`&#707;**Zwei Datenbanken**: eine, in der [Promising Practices](https://unevoc.unesco.org/home/Promising+Practices+in+TVET) vorgestellt werden, und eine zweite, in der die internationale Terminologie des Bildungssektors zusammengefasst ist, um eine Grundlage für gemeinsame überstaatliche Kommunikation zu schaffen.  \n`,
}}
</SetTranslate>)

export const ExpandedItem3b = (<SetTranslate>
{{
FR:`'&#707;**[une plateforme de Networking](https://unevoc.unesco.org/network/Dashboard_Video_Guide.mp4)**, pour 200 institutions de 150 pays différents!`,
EN:`'&#707; **a [networking platform](https://unevoc.unesco.org/network/Dashboard_Video_Guide.mp4)** for 200 institutions from 150 different countries.`,
DE:`'&#707; **eine [Networking-Plattform](https://unevoc.unesco.org/home/TVETipedia+Glossary)** für 200 Institutionen aus 150 verschiedenen Ländern.`,
}}
</SetTranslate>)

export const AllItem3 = (<SetTranslate>
{{
FR: ExpandedItem3.props.children.FR + ExpandedItem3a.props.children.FR + ExpandedItem3b.props.children.FR,
EN:ExpandedItem3.props.children.EN + ExpandedItem3a.props.children.EN + ExpandedItem3b.props.children.EN,
DE:ExpandedItem3.props.children.DE + ExpandedItem3a.props.children.DE + ExpandedItem3b.props.children.DE,
}}
</SetTranslate>)

export const conclusion = (<SetTranslate>
{{
FR:`**J'ai adoré développer ces services, leur impact concret, et le travail avec les développeurs webs.
Fin 2021, j'ai donc décidé de quitter mon travail pour me lancer à 100% dans cette branche !**
`,
EN:`**I have enjoyed helping to shape the development of these services, observing their concrete impact, and working with the web developers in the process
So at the end of 2021, I decided to quit my job to focus a 100% on this field!**`,
DE:`**Ich habe es genossen, die Entwicklung dieser Dienste mitzugestalten, ihre konkreten Auswirkungen zu beobachten und dabei mit den Webentwicklern zu arbeiten.  \ 
Ende 2021 habe ich daher beschlossen, meine Arbeit zu kündigen, um mich zu 100 % auf diese Branche zu konzentrieren!**`,
}}
</SetTranslate>)