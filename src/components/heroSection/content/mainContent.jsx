import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { ReactTyped } from "react-typed";

import Digital from '../../../assets/digital.png';
import Galaxy from '../../galaxy/galaxy'

import './mainContent.css';

const titles = ["Dev Fullstack", "Desenvolvedor de Software", "Engenheiro de Software"];

export default function MainContent() {
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => {
    //             return prevIndex === titles.length - 1 ? 0 : prevIndex + 1;
    //         });
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="mainContent">
            <Galaxy
                mouseRepulsion
                mouseInteraction
                density={1}
                glowIntensity={0.3}
                saturation={0}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={0}
                starSpeed={0.5}
                speed={1}
            />

            <div className="starterText">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5, duration: 3, ease: "easeOut"}}
                > {"<"} <span>{titles[index]}</span> {"/>"}</motion.h1>
            </div>

            <div className="mainText">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5, duration: 7}}
                >
                    Bem Vindo(a)!
                    <p>Eu sou</p>
                    <span>
                        <ReactTyped strings={["Henrique Radavelli"]}
                            typeSpeed={100}
                            backSpeed={100}
                            backDelay={5000}
                            startDelay={500}
                            showCursor={true}
                            loop
                        />
                    </span>
                </motion.h1>
            </div>

            <motion.div
                initial={{opacity: 0, top: "61%"}}
                whileInView={{opacity: 1, top: "51%"}}
                transition={{delay: 0.5, duration: 2, ease: "easeOut"}}

                className="mainContentText">
                <p>
                    Desenvolvedor Fullstack construindo aplicações modernas e
                    responsivas para a web com as melhores tecnologias
                </p>
            </motion.div>
        </div>
    );
}
