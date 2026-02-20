import React from 'react'

import {LuCode, LuServer, LuComputer, LuSettings} from 'react-icons/lu'
import {FaServer, FaDatabase, FaTools} from 'react-icons/fa'

import './techStack.css'

const frontend = [
    {id: 1, tech: "JavaScript"},
    {id: 2, tech: "React"},
    {id: 3, tech: "CSS"}
]

const backend = [
    {id: 1, tech: "Node.js"},
    {id: 2, tech: "Python"},
    {id: 3, tech: "API REST"}
]

const databases = [
    {id: 1, tech: "SQL Server"},
    {id: 2, tech: "MariaDB"},
    {id: 3, tech: "MongoDB"}
]

const tools = [
    {id: 1, tech: "VS Code"},
    {id: 2, tech: "Insomnia / Postman"},
    {id: 3, tech: "Figma"}
]

const platforms = [
    {id: 1, tech: "GitHub"},
    {id: 2, tech: "GCP"},
    {id: 3, tech: "Netfly"}
]

const deployVers = [
    {id: 1, tech: "Git"},
    {id: 2, tech: "Docker"},
    {id: 3, tech: "Nginx"}
]


export default function TechStack() {
    return (
        <div id='techStack'  className="techStack">

            <div className="techIntroduction">
                <h1>Habilidades e Tecnologias</h1>
            </div>

            <div className="stack">
                <div className="frontend tech">
                    <LuCode />
                    {frontend.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="backend tech">
                    <LuComputer />
                    {backend.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="databases tech">
                    <FaDatabase />
                    {databases.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="tools tech">
                    <FaTools />
                    {tools.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="platforms tech">
                    <FaServer />
                    {platforms.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>

                <div className="deployVers tech">
                    <LuSettings />
                    {deployVers.map(tech => (
                        <p key={tech.id}>{tech.tech}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
