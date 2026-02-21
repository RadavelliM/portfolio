import React from 'react'
import { LuCode, LuServer, LuComputer, LuSettings } from 'react-icons/lu'
import { FaServer, FaDatabase, FaTools } from 'react-icons/fa'

import './techStack.css'

const frontend = [
    { id: 1, tech: "JavaScript" },
    { id: 2, tech: "React" },
    { id: 3, tech: "CSS3" }
]

const backend = [
    { id: 1, tech: "Node.js" },
    { id: 2, tech: "Python" },
    { id: 3, tech: "REST APIs" }
]

const databases = [
    { id: 1, tech: "SQL Server" },
    { id: 2, tech: "MariaDB" },
    { id: 3, tech: "MongoDB" }
]

const tools = [
    { id: 1, tech: "VS Code" },
    { id: 2, tech: "Insomnia / Postman" },
    { id: 3, tech: "Figma" }
]

const platforms = [
    { id: 1, tech: "GitHub" },
    { id: 2, tech: "Google Cloud (GCP)" },
    { id: 3, tech: "Netlify" }
]

const deployVers = [
    { id: 1, tech: "Git" },
    { id: 2, tech: "Docker" },
    { id: 3, tech: "Nginx" }
]

export default function TechStack() {
    return (
        <div id='techStack' className="techStack">

            <div className="techIntroduction">
                <h1>Habilidades & Tecnologias</h1>
                <h4>Conjunto de tecnologias e ferramentas que utilizo para desenvolver
        aplicações modernas, escaláveis e de alta performance.</h4>
            </div>

            <div className="stack">

                <div className="sectionMessage">
                    <h2>Desenvolvimento de Aplicações</h2>
                </div>

                <div className="frontend tech">
                    <div className="techHeader">
                        <LuCode />
                        <h3>Frontend</h3>
                    </div>
                    {frontend.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="backend tech">
                    <div className="techHeader">
                        <LuComputer />
                        <h3>Backend</h3>
                    </div>
                    {backend.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="databases tech">
                    <div className="techHeader">
                        <FaDatabase />
                        <h3>Bancos de Dados</h3>
                    </div>
                    {databases.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="sectionMessage">
                    <h2>Ferramentas, Plataformas & Deploy</h2>
                </div>

                <div className="tools tech">
                    <div className="techHeader">
                        <FaTools />
                        <h3>Ferramentas</h3>
                    </div>
                    {tools.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="platforms tech">
                    <div className="techHeader">
                        <FaServer />
                        <h3>Plataformas</h3>
                    </div>
                    {platforms.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="deployVers tech">
                    <div className="techHeader">
                        <LuSettings />
                        <h3>Deploy & Versionamento</h3>
                    </div>
                    {deployVers.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
