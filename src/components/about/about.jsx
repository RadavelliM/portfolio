import React from 'react'

import { LuMapPin } from 'react-icons/lu'
import { motion } from 'framer-motion'

import DownloadButton from '../common/download/download'

import styles from './about.module.css'

const textsAboutMe = [
    "Atuo como desenvolvedor Full Stack em formação, cursando Engenharia de Software e aprofundando meus conhecimentos na construção de aplicações web modernas e bem estruturadas.",
    "Tenho interesse especial em design de sistemas, desenvolvimento de APIs e organização de código orientada à clareza e manutenção.",
    "Valorizo padrões que promovem legibilidade, modularidade e escalabilidade, buscando sempre escrever soluções que sejam eficientes hoje e sustentáveis no futuro.",
    "No momento, concentro meus esforços na criação de projetos práticos que reforçam minha base técnica e ampliam minha experiência com diferentes tecnologias."
]

function TextsCard({ text }) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2, delay: 1}}
            className={styles.info}
        >
            <h4>{text}</h4>
        </motion.div>
    )
}

export default function About() {
    return (
        <div id='about' className={styles.about}>

            <div className={styles.title}>
                <motion.h1
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}

                >Sobre Mim
                </motion.h1>
            </div>

            <div>
                {textsAboutMe.map((info, index) => (
                    <TextsCard
                        text={info}
                        key={index}
                    />
                ))}
            </div>


            <motion.address
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2, delay: 1}}
            >
                <p> <LuMapPin /> Joinville, SC - Brasil </p>
            </motion.address>

        </div>
    )
};
