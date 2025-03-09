import logo from "/II CGP logo.png"
import logoChurch from "/II CGP logo.png"
import escolaDaVerdade from "/escola.webp"
import casa from "./casa.jpg";
import casa2 from "./casa2.jpg";
import casa3 from "./casa3.jpg";
import casa4 from "./casa4.jpg";
import imageMeta from "./2025.jpg"
import escola from "./escolaLogo.jpg";
import tv from "./tvpalavra.jpg";
import churchImage from "./church.jpg"
import logoIICGP from "./logo2.jpeg"
import sot from "./escoladaverdade.jpg"
import escolaDeCasamento from "./escoladecasamento.jpg"
import cultoDeDomingo from "./cultodedomingo.jpg"
import tardeDeLouvor from "./tardedelouvor.jpg"
import pastores from "./pastores.jpg"
import seminario from "./seminario-de-oracao.jpg"
import conferenciaAcademica from "./conferencia-academica.jpg"
import justica from "./justica.jpeg"
import cruz from "./the-gospel.jpeg"
import podcast from "./podcast.jpeg"



const imagesCarousel = [
  casa, casa2, casa3, casa4
];

const programsCard = [ 
  {
    img: escola,
    programName: "Escola da Verdade",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum."
  },
  {
    img: churchImage,
    programName: "TV Palavra",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum."
  },
  {
    img: churchImage,
    programName: "Escola de Casamento e Familia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur"
  },
  {
    img: churchImage,
    programName: "O meu Testemunho",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum."
  }
]

//Home page programas
const secondProgramsCard = [
  {
    img: sot,
    programName: "Escola da Verdade",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    secondDescription: "Leitura"
  },
  {
    img: cruz,
    programName: "O Evangelho",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    secondDescription: "Livro"
  },
  {
    img: podcast,
    programName: "Meu testemunho",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    secondDescription: "Video Podcast"
  },
  {
    img: justica,
    programName: "O que é Justiça de Deus?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    secondDescription: "Leitura"
  }
]

const sencondEvets = [
  {
    img: "casa",
    eventTitle: "Tech Conference 2025",
    firstDescription: "Join the biggest tech event of the year.",
    secondDescription: "Technology",
  },
  {
    img: "casa2",
    eventTitle: "Music Festival",
    firstDescription: "Experience live performances by top artists.",
    secondDescription: "Entertainment",
  },
  {
    img: "casa3",
    eventTitle: "Business Summit",
    firstDescription: "Connect with industry leaders and innovators.",
    secondDescription: "Business",
  },
  {
    img: "https://source.unsplash.com/90x90/?education",
    eventTitle: "Education Expo",
    firstDescription: "Discover new learning opportunities.",
    secondDescription: "Education",
  },
];



//eventos para pagina de Eventos
const events = [
  {
    src: escolaDeCasamento,
    title: 'Escola de Casamento e Familia',
    description: 'Sexta-feira:18H',
  },
  {
    src: cultoDeDomingo,
    title: 'Culto de Domingo',
    description: 'Domingo: 10H',
  },
  {
    src: tardeDeLouvor,
    title: 'Evento: Tarde de Louvor',
    description: 'Sabado, 08 de March, 13H',
  },
];

const eventos = [
  {
    DataDoEvento: "08 de March 2025",
    NomeDoEvento: "Tarde de Louvor e Adoracao",
    LocalDoEvento: "Igreja Internacional Casa da Gloria da Palavra",
    DescriçãoDoEvento: "Receba um louvor de Deus e adore o Senhor.",
    flyer: tardeDeLouvor,
  },
  {
    DataDoEvento: "09 de March 2025",
    NomeDoEvento: "Seminario de Oracao",
    LocalDoEvento: "Igreja Internacional Casa da Gloria da Palavra",
    DescriçãoDoEvento: "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    flyer: seminario,
  },
  {
    DataDoEvento: "10 de March 2025",
    NomeDoEvento: "Conferencia Academica",
    LocalDoEvento: "Igreja Internacional Casa da Gloria da Palavra",
    DescriçãoDoEvento: "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus id lectus fringilla, vel consectetur purus consectetur. Donec vel ipsum at ex consectetur vestibulum.",
    flyer: conferenciaAcademica,
  }
]
export {
  logo,
  logoChurch,
  escolaDaVerdade,
  imagesCarousel,
  imageMeta,
  programsCard,
  logoIICGP,
  secondProgramsCard,
  events,
  escola,
  tv,
  churchImage,
  sot,
  pastores,
  eventos,
  
}