import SetTranslate from "./SetTranslate";

export const content = (<SetTranslate>   
  {{
  FR: "Le développement est ma deuxième carrière! \n\nDe 2015 à 2021, j’ai travaillé pour **l’UNESCO**, où j’organisais des conférences et coordonnaient des publications et *ressources en ligne.* \n\n J’y ai acquis des compétences interpersonnelles, et une nouvelle passion: le dévelopement web!", 
  EN:"Le développement est ma deuxième carrière! \n\nDe 2015 à 2021, j’ai travaillé pour l’UNESCO, où j’organisais des conférences et coordonnaient des publications et ressources en ligne. \n\n J’y ai acquis des compétences interpersonnelles, et une nouvelle passion: le dévelopement web!",
  DE:"Le développement est ma deuxième carrière! \n\nde 2015 à 2021, j’ai travaillé pour l’UNESCO, où j’organisais des conférences et coordonnaient des publications et ressources en ligne. \n\n J’y ai acquis des compétences interpersonnelles, et une nouvelle passion: le dévelopement web!"
}}
</SetTranslate>)

export const ExpandedItem1 = (<SetTranslate>
{{
FR:'J’ai intégré l’UNESCO lors d’un stage, qui concluait mon master en Sciences politiques. Notre objectif: **faciliter la collaboration internationale** entre universités, centres de formations, ministères etc.',
EN:'',
DE:'',
}}
</SetTranslate>)

export const ExpandedItem2 = (<SetTranslate>
{{
FR:"J'organisais des ateliers de leadership et de networking pour des hauts fonctionnaires, des chercheurs, des chefs d'établissement, et les aidais à travailler ensemble sur des projets liés au dévelopement durable, à l’égalité des chances etc.",
EN:'',
DE:'',
}}
</SetTranslate>)

export const ExpandedItem3 = (<SetTranslate>
{{
FR:"J’ai aussi, en collaboration avec des développeurs, conçu des services webs!   \n",
EN:'',
DE:'',
}}
</SetTranslate>)

export const ExpandedItem3a = (<SetTranslate>
{{
FR:"&#707;**Deux bases de données:** une compilant des pratiques prometteuses, une autre de terminologie internationale  \n",
EN:'',
DE:'',
}}
</SetTranslate>)

export const ExpandedItem3b = (<SetTranslate>
{{
FR:'&#707;**une plateforme de Networking**, pour 200 institutions de 150 pays différents!',
EN:'',
DE:'',
}}
</SetTranslate>)

export const AllItem3 = (<SetTranslate>
{{
FR: ExpandedItem3.props.children.FR + ExpandedItem3a.props.children.FR + ExpandedItem3b.props.children.FR,
EN:'',
DE:'',
}}
</SetTranslate>)