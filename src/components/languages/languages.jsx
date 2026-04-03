import React from "react";

import { FaBookOpen } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

import { motion } from "framer-motion";

import styles from "./languages.module.css";

const languages = [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Avançado" },
    { language: "Francês", level: "Intermediário" }
];

function LanguageCard({ language, level }) {
    return (
        <motion.div
            className={styles.language}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
        >
            <p className={styles.firstP}>
                {" "}
                <span className={styles.spanP}>
                    <AiOutlineGlobal className={styles.iconSpan} />
                </span>
                Idioma: <span className={styles.idiom}>{language}</span>
            </p>

            <p>
                {" "}
                <span className={styles.spanP}>
                    <FaBookOpen className={styles.iconSpan} />
                </span>
                Nível: <span className={styles.levelSpan}>{level}</span>
            </p>
        </motion.div>
    );
}

export default function Languages() {
    return (
        <div id="idioms" className={styles.languages}>
            <div className={styles.languageText}>
                <h1 className={styles.languageTitle}>Idiomas</h1>
                <h2>Conjunto de idiomas que falo e seus respectivos níveis</h2>
            </div>

            <div className={styles.languageInfo}>
                {languages.map((info, index) => (
                    <LanguageCard
                        key={index}
                        language={info.language}
                        level={info.level}
                    />
                ))}
            </div>
        </div>
    );
}
