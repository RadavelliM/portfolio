import React from "react";

import { motion, translateAxis } from "framer-motion";

import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";

import styles from "./graduation.module.css";

const graduationInfos = [
    {
        img: <FaGraduationCap className={styles.graduationIcon} />,
        title: "Título: ",
        link: "https://seja.univille.br/curso/presencial/engenharia-de-software/",
        txt: "Bacharelado em Engenharia de Software"
    },

    {
        img: <FaUniversity className={styles.graduationIcon} />,
        title: "Instituição: ",
        link: "https://seja.univille.br/",
        txt: "Univille"
    },

    {
        img: <AiFillCalendar className={styles.graduationIcon} />,
        title: "Início: ",
        txt: "2025"
    },

    {
        img: <AiFillCalendar className={styles.graduationIcon} />,
        title: "Previsão de conclusão: ",
        txt: "2029"
    }
];

export default function Graduation() {
    return (
        <div className={styles.graduation}>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
            >
                Graduação
            </motion.h1>

            <motion.div
                className={styles.graduationInfo}
                initial={{ translateY: "25%", opacity: 0 }}
                whileInView={{ translateY: "0%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
            >
                {graduationInfos.map((info, index) => (
                    <p key={index}>
                        <span>{info.img}</span>
                        <span className="titleinfo">{info.title}</span>
                        {info.link ? (
                            <a href={info.link} target="_blank">
                                {info.txt}
                            </a>
                        ) : (
                            info.txt
                        )}
                    </p>
                ))}
            </motion.div>
        </div>
    );
}
