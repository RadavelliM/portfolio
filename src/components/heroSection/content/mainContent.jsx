import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ReactTyped } from "react-typed";

import Galaxy from "../../galaxy/galaxy";

import "./mainContent.css";

export default function MainContent() {
    const [index, setIndex] = useState(0);

    return (
        <div className="mainContent">
            <Galaxy
                mouseRepulsion
                mouseInteraction
                density={0.5}
                glowIntensity={0.3}
                saturation={0}
                hueShift={40}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={0}
                starSpeed={0.5}
                speed={1}
            />

            <div className="mainText">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                >
                    Bem Vindo(a)!
                    <p>Eu sou</p>
                    <span>
                        <ReactTyped
                            strings={["Henrique Radavelli"]}
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
                initial={{ opacity: 0, top: "61%" }}
                whileInView={{ opacity: 1, top: "51%" }}
                transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                className="mainContentText"
            >
                <p>
                    Desenvolvedora Fullstack construindo aplicações modernas e
                    responsivas para a web com as melhores tecnologias
                </p>
            </motion.div>
        </div>
    );
}
