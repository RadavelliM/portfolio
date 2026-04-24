import React from "react";
import { motion } from "framer-motion";

import { LuCode, LuComputer, LuSettings } from "react-icons/lu";
import { FaServer, FaDatabase, FaTools } from "react-icons/fa";
import BorderGlow from "./hoverComponent";

import "./techStack.css";

const techSections = [
    {
        title: "Desenvolvimento de Aplicações",
        items: [
            {
                title: "Frontend",
                icon: LuCode,
                techs: ["JavaScript", "React", "CSS3"]
            },
            {
                title: "Backend",
                icon: LuComputer,
                techs: ["Node.js", "Python", "REST APIs"]
            },
            {
                title: "Bancos de Dados",
                icon: FaDatabase,
                techs: ["SQL Server", "MariaDB", "MongoDB"]
            }
        ]
    },
    {
        title: "Ferramentas, Plataformas & Deploy",
        items: [
            {
                title: "Ferramentas",
                icon: FaTools,
                techs: ["VS Code", "Insomnia / Postman", "Linux"]
            },
            {
                title: "Plataformas",
                icon: FaServer,
                techs: ["GitHub", "Google Cloud (GCP)", "Netlify"]
            },
            {
                title: "Deploy",
                icon: LuSettings,
                techs: ["Git", "Docker", "NGINX"]
            }
        ]
    }
];

function TechCard({ title, icon: Icon, techs }) {
    return (
        <div className="skilltech">
            <div className="techHeader">
                <Icon className="icon" />
                <h3>{title}</h3>
            </div>

            {techs.map((tech, index) => (
                <p key={index}>{tech}</p>
            ))}
        </div>
    );
}

export default function TechStack() {
    return (
        <div id="techStack" className="techStack">
            <div className="techIntroduction">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Habilidades & Tecnologias
                </motion.h1>

                <motion.h4
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Conjunto de tecnologias e ferramentas que utilizo para
                    desenvolver aplicações modernas, escaláveis e de alta
                    performance.
                </motion.h4>
            </div>

            <div className="stack">
                {techSections.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                        <div className="sectionMessage">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {section.title}
                            </motion.h2>
                        </div>

                        {section.items.map((item, index) => (
                            <motion.div
                                className="glowingCardTechStack"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <BorderGlow
                                    edgeSensitivity={0}
                                    glowColor="80 80 80"
                                    backgroundColor="#120F17"
                                    borderRadius={30}
                                    glowRadius={80}
                                    glowIntensity={1}
                                    coneSpread={45}
                                    animated
                                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                                >
                                    <div className="index">
                                        <TechCard
                                            key={index}
                                            title={item.title}
                                            icon={item.icon}
                                            techs={item.techs}
                                        />
                                    </div>
                                </BorderGlow>
                            </motion.div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
