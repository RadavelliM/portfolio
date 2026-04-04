import restauranteFlask from "../../assets/restaurante_flask.png";
import gerenciamentoClientes from "../../assets/gerenciamentoClientes.png";
import apiRest from "../../assets/api_rest.png";

const projectsIteration = [
    {
        nome: "API REST - Universidade",
        img: apiRest,
        texto: `
                Backend de uma universidade desenvolvida em API REST com MySQL,
                e Node.js com Express, usando a ORM Sequelize para abstração de dados e migrations.
                Deploy feito no Google Cloud Platform (GCP), utilizando imagem Docker e NGINX para proxy reversa.
        `,
        link: "https://github.com/RadavelliM/api-rest-college",
        stack: [
            "Node.js",
            "Express",
            "MySQL",
            "Sequelize ORM",
            "GCP",
            "Docker",
            "NGINX"
        ]
    },
    {
        nome: "Gerenciamento de Clientes",
        img: gerenciamentoClientes,
        texto: `
            Projeto de gerenciamento de clientes, com arquitetura monolítica MVC (Model-View-Controller), desenvolvida usando Node.js, Express e templates EJS
            e banco de dados não-relacional (NoSQL) MongoDB, com a ODM Mongoose para integridade dos dados.
            Deploy feito no Google Cloud Platform (GCP), utilizando Docker e NGINX para proxy reversa.
        `,
        link: "https://github.com/RadavelliM/gerenciamento-clientes",
        stack: [
            "EJS",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose ODM",
            "GCP"
        ]
    },
    {
        nome: "Gerenciamento de Restaurante",
        img: restauranteFlask,
        texto: `
            Projeto de gerenciamento completo de restaurante em Python, usando o framework web Flask,
            com arquitetura monolítica MVC (Model-View-Controller),
            e banco de dados relacional SQL Server
        `,
        link: "https://github.com/RadavelliM/gerenciamento-restaurante",
        stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQL Server"]
    }
];

export default projectsIteration;
