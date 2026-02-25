import React from 'react';
import { FaBook, FaBookOpen, FaCertificate } from 'react-icons/fa';
import { LuComputer } from 'react-icons/lu';

import styles from './course.module.css';

const coursesInfo = [
    {
        name: "JavaScript, React.JS & TypeScript",
        platform: "Udemy",
        description: "Manipulação de DOM, async/await, consumo e criação de APIs REST.",
        situation: 'Em Progresso'
    },
    {
        name: "Git & GitHub",
        platform: "Udemy",
        description: "Controle de versão, branchs, versionamento, rebase, servidores e commits.",
        certificate: 'Certificado',
        link: 'https://www.youtube.com/'
    },
    {
        name: "Docker",
        platform: "Udemy",
        description: "Containerização de aplicações Node.js e configuração de ambientes isolados.",
        certificate: 'Certificado',
        link: 'https://www.youtube.com/'
    }
];

export default function Courses() {
    const iconClass = styles.graduationIcon;

    return (
        <div className={styles.coursesInfo}>
            <h1>Cursos Complementares</h1>

            <div className={styles.courses}>
                {coursesInfo.map((info, index) => (
                    <div key={index} className={styles.courseBox}>

                        <p>
                            <span className={styles.first}><FaBook className={iconClass} /></span>
                            Curso: <span className={styles.second}>{info.name}</span>
                        </p>

                        <p>
                            <span className={styles.first}><LuComputer className={iconClass} /></span>
                            Plataforma: <span className={styles.second}>{info.platform}</span>
                        </p>

                        <p>
                            <span className={styles.first}><FaBookOpen className={iconClass} /></span>
                            Descrição: <span className={styles.second}>{info.description}</span>
                        </p>

                        {info.situation ? (
                            <p>
                                <span className={styles.first}><FaCertificate className={iconClass} /></span>
                                Situação: <span className={styles.second}>{info.situation}</span>
                            </p>
                        ) : (
                            <p>
                                <span className={styles.first}><FaCertificate className={iconClass} /></span>
                                Situação: <span className={styles.second}>
                                    <a href={info.link} target='_blank' rel="noreferrer">{info.certificate}</a>
                                </span>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
