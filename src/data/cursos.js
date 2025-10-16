import PaginasWebImg from '@/assets/Consola.png'
const cursos = [
  {
    id: 'bases2',
    nombre: 'Bases 2',
    description: 'Se centra en reforzar lo aprendido en bases 1 pero con mucha mayor complejidad, bases relacionales y APIS',
    image: PaginasWebImg,
    items: [
      {
        title: 'Investigación 1',
        description: 'Replicar datos en dos bases de datos en un mismo servidor',
        typeEvaluation: 'Investigación',
        deliveryDate: '23/9/2025',
        technologiesInvolved: 'SQL Server',
        linkRepo: '#',
        linkDeploy: '#'
      },
      {
        title: 'Tarea 1',
        description: 'API REST para la base de Adventure Works',
        typeEvaluation: 'Tarea',
        deliveryDate: '14/9/2025',
        technologiesInvolved: 'Node.js, Express, SQL Server',
        linkRepo: 'https://github.com/2025-Semestre-2/tarea-1-Bryan9044',
        linkDeploy: '#'
      },
      {
        title: 'Primer proyecto',
        description: 'Hacer modulos de la base WideWorldImporters y con una API mostrarlos en un frontend',
        typeEvaluation: 'Proyecto',
        deliveryDate: '12/10/2025',
        technologiesInvolved: 'SQL server, CSS, Vue, .net core',
        linkRepo: 'https://github.com/2025-Semestre-2/proyecto-1-Bryan9044',
        linkDeploy: '#'
      },
      {
        title: 'Quizz 1',
        description: 'Con ciertas tablas mostrar pagos, viajes, clientes, total y subtotal',
        typeEvaluation: 'Quizz',
        deliveryDate: '27/08/2025',
        technologiesInvolved: 'SQL server',
        linkRepo: '',
        linkDeploy: '#'

      },
      {
        title: 'Quizz 2',
        description: 'Calcular el costo de ciertas transferencias y Join con la información dada',
        typeEvaluation: 'Quizz',
        deliveryDate: '24/09/2025',
        technologiesInvolved: 'Word',
        linkRepo: '#',
        linkDeploy: '#'

      },
      {
        title: 'Quizz 3',
        description: 'A partir de una tabla separar la tabla y mantener datos originales según sucursal',
        typeEvaluation: 'Quizz',
        deliveryDate: '15/10/2025',
        technologiesInvolved: 'SQL Server',
        linkRepo: '#',
        linkDeploy: '#'

      }
    ]
  },
  {
    id: 'compi',
    nombre: 'Compiladores e interpretes',
    description: 'Se centra en aprender acerca de la teoría sobre compiladores e interpretes para posibilitar la creación de uno mismo',
    image: PaginasWebImg,
    items: [
      {
        title: 'Examen 1',
        description: 'Responder preguntas teoricas y armar arbol sintactico',
        typeEvaluation: 'Examen',
        deliveryDate: '02/10/2025',
        technologiesInvolved: 'Jflex y word',
        linkRepo: '#',
        linkDeploy: '#'
      },
      {
        title: 'Tarea 1',
        description: 'Crear la gramática del cursos siguiendo los lineamientos indicados',
        typeEvaluation: 'Tarea',
        deliveryDate: '12/09/2025',
        technologiesInvolved: 'Bloc de notas',
        linkRepo: 'https://github.com/DylanRodriguez22/Tarea1_Compiladores',
        linkDeploy: '#'
      },
      {
        title: 'Tarea 2',
        description: 'Investigar temas de MIPS y hacer código con respecto al #1 proyecto',
        typeEvaluation: 'Tarea',
        deliveryDate: '18/09/2025',
        technologiesInvolved: 'Word y MARS',
        linkRepo: '#',
        linkDeploy: '#'
      },
      {
        title: 'Proyecto 1',
        description: 'Crear lexer y parser a partir de la tarea#1',
        typeEvaluation: 'Proyecto',
        deliveryDate: '06/10/2025',
        technologiesInvolved: 'word, Jflex, Cup',
        linkRepo: 'https://github.com/Bryan9044/ProyectoCompi-1',
        linkDeploy: '#'
      },
      {
        title: 'Quizz 1',
        description: 'Mentimeter sobre temas vistos en clase',
        typeEvaluation: 'Quizz',
        deliveryDate: '19/08/2025',
        technologiesInvolved: 'Mentimeter',
        linkRepo: '#',
        linkDeploy: '#'
      },
      {
        title: 'Quizz 2',
        description: 'Responder preguntas teoricas vistas en clase',
        typeEvaluation: 'Quizz',
        deliveryDate: '18/09/2025',
        technologiesInvolved: 'Word',
        linkRepo: '#',
        linkDeploy: '#'
      },
      {
        title: 'Quizz 3',
        description: 'Hacer tabla Dtran y arbol sintactico',
        typeEvaluation: 'Quizz',
        deliveryDate: '23/09/2025',
        technologiesInvolved: 'Word',
        linkRepo: '#',
        linkDeploy: '#'
      },
    ]
  },
  {
  id: 'sociedad',
  nombre: 'Computación y sociedad',
  description: 'Observar a través de la historia de la computación patrones o comportamiento que pasan desapercidos en la sociedad',
  image: PaginasWebImg,
  items: [
    {
      title: 'Tarea 1',
      description: 'Crear contenido digital sobre lo que hemos visto en clase',
      typeEvaluation: 'Tarea',
      deliveryDate: '16/10/2025',
      technologiesInvolved: 'Youtube, Canva',
      linkRepo: '#',
      linkDeploy: 'https://www.youtube.com/watch?v=0rGIRR71tMU'
    }
  ]
  },
  {
  id: 'web',
  nombre: 'Introducción al desarrollo de páginas web',
  description: 'Aprender los principios sobre cómo desarrollar buenas páginas con principios y fundamentos',
  image: PaginasWebImg,
  items: [
    {
      title: 'Laboratorio 1',
      description: 'Investigación markdown',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '10/8/2025',
      technologiesInvolved: 'Netlify',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Laboratorio 2',
      description: 'Estructura y semántica',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '16/8/2025',
      technologiesInvolved: 'HTML',
      linkRepo: 'https://github.com/Bryan9044/Laboratorio2',
      linkDeploy: 'https://josheria.netlify.app/'
    },
    {
      title: 'Laboratorio 3',
      description: 'Embellecer lab2',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '25/8/2025',
      technologiesInvolved: 'HTML y CSS',
      linkRepo: 'https://github.com/Bryan9044/Laboratorio2',
      linkDeploy: 'https://josherialab3.netlify.app/'
    },
    {
      title: 'Laboratorio 4',
      description: 'Responder preguntas',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '29/8/2025',
      technologiesInvolved: 'TXT',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Laboratorio 5',
      description: 'Pulido responsive',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '07/9/2025',
      technologiesInvolved: 'TXT',
      linkRepo: 'https://github.com/Bryan9044/Laboratorio2/tree/lab5-responsive',
      linkDeploy: 'https://josheriaresponsive.netlify.app/'
    },
    {
      title: 'Laboratorio 6',
      description: 'Actividad dinamica',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '19/9/2025',
      technologiesInvolved: 'js,html',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Laboratorio 7',
      description: 'Presentación sobre tema asignado en clase',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '24/9/2025',
      technologiesInvolved: 'Canva',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Laboratorio 8',
      description: 'API REST con JWT y AuthKey',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '03/10/2025',
      technologiesInvolved: 'Node.js, Express, Postman',
      linkRepo: 'https://github.com/Bryan9044/Lab8',
      linkDeploy: '#'
    },  
    {
      title: 'Laboratorio 9',
      description: 'API REST con GraphQL',
      typeEvaluation: 'Laboratorio',
      deliveryDate: '29/8/2025',
      technologiesInvolved: 'TypeScript, Node.js, Express, GraphQL',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Proyecto 1',
      description: 'Crear maqueta en el frontend sobre la banca web que nos pide el cliente',
      typeEvaluation: 'Proyecto',
      deliveryDate: '28/9/2025',
      technologiesInvolved: 'Vue, CSS, JS',
      linkRepo: 'https://github.com/Seraf1n0/BancaWeb',
      linkDeploy: '#'
    }
,
    {
      title: 'Portafolio 1',
      description: 'Crear portafolio personal con respecto al curso en un framework moderno',
      typeEvaluation: 'Portafolio',
      deliveryDate: '19/9/2025',
      technologiesInvolved: 'Vue, CSS, JS',
      linkRepo: 'https://github.com/Bryan9044/Portafolio-1Desarrollo',
      linkDeploy: '#'
    }
  ]
  },
 {
  id: 'QA',
  nombre: 'Aseguramiento de la calidad de software',
  description: 'Aprender principios y estandares para asegurar la calidad del software desarrollado',
  image: PaginasWebImg,
  items: [
    {
      title: 'Investigación 1',
      description: 'Recopilar información sobre el estándar IEEE 15288 y 12207',
      typeEvaluation: 'Investigación',
      deliveryDate: '21/8/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 2',
      description: 'Recopilar información sobre el estándar IEEE 730',
      typeEvaluation: 'Investigación',
      deliveryDate: '5/9/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 3',
      description: 'Recopilar información sobre el estándar IEEE 829',
      typeEvaluation: 'Investigación',
      deliveryDate: '5/9/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 4',
      description: 'Recopilar información sobre el estándar IEEE 830',
      typeEvaluation: 'Investigación',
      deliveryDate: '19/9/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 5',
      description: 'Recopilar información sobre el estándar IEEE 1028',
      typeEvaluation: 'Investigación',
      deliveryDate: '3/10/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 6',
      description: 'Recopilar información sobre el estándar IEEE 1044',
      typeEvaluation: 'Investigación',
      deliveryDate: '10/10/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
    {
      title: 'Investigación 7',
      description: 'Recopilar información sobre el estándar IEEE 1008',
      typeEvaluation: 'Investigación',
      deliveryDate: '20/10/2025',
      technologiesInvolved: 'Word',
      linkRepo: '#',
      linkDeploy: '#'
    },
 ]
 }

]

export default cursos
