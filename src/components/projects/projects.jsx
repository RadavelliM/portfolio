import React, { useState } from 'react'

import projectsIteration from './projectsIteration'
import styles from './projects.module.css'

import { motion } from 'framer-motion'

import { FiArrowLeft, FiArrowRight, FiGithub } from 'react-icons/fi'

function ProjectsCard({ nome, img, link, texto, stack }) {
    return (
        <motion.div
            className={styles.cardContainer}
            initial={{ opacity: 0, x: 75 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >

            <img src={img} alt={nome} className={styles.projectImg} />

            <div className={styles.infoText}>
                <p className={styles.projectMainInfo}>{texto}</p>
            </div>

            <div className={styles.projectInfo}>
                <h1 className={styles.projectName}>{nome}</h1>

                <div className={styles.viewCode}>
                    <a href={link} target='_blank'> <FiGithub/> Ver Código </a>
                </div>
            </div>

            <div className={styles.projectStack}>
                {stack.map((info, index) => (
                    <div className={styles.stackItem}>{info}</div>
                ))}
            </div>

        </motion.div>
    )
}

export default function Projects() {
    let [current, setCurrent] = useState(0);

    if (current === projectsIteration.length) setCurrent(current = 0)
    if (current < 0) setCurrent(current = (projectsIteration.length - 1))

    const project = projectsIteration[current]

    return (
        <div className="projects" id='projects'>

            <motion.div
                className={styles.projectsMessage}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
            >
                <h1 className={styles.projetcInit}>Projetos Desenvolvidos</h1>

                <h2>Mostruário dos meus recentes trabalhos e habilidades técnicas</h2>
            </motion.div>

            <motion.div
                className={styles.projectsArrowChangeSection}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2, delay: 1}}
            >
                <FiArrowLeft className={styles.projectsArrow} onClick={() => {setCurrent(current - 1)}}/>
                <FiArrowRight className={styles.projectsArrow} onClick={() => {setCurrent(current + 1)}}/>
            </motion.div>

            <div className={styles.projectsVisualizer}>
                <ProjectsCard
                    key={project.nome}
                    img={project.img}
                    nome={project.nome}
                    link={project.link}
                    texto={project.texto}
                    stack={project.stack}
                />
            </div>

        </div>
    )
};
