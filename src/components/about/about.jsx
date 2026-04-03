import React from "react";

import { LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";

import DownloadButton from "../../ui/download/download";

import styles from "./about.module.css";

import textsAboutMe from "./about";

function TextsCard({ text }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className={styles.info}
        >
            <h4>{text}</h4>
        </motion.div>
    );
}

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.title}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Sobre Mim
                </motion.h1>
            </div>

            <div>
                {textsAboutMe.map((info, index) => (
                    <TextsCard text={info} key={index} />
                ))}
            </div>

            <motion.address
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
            >
                <p>
                    <LuMapPin /> Joinville, SC - Brasil
                </p>
            </motion.address>

            <DownloadButton isAbout={false} />
        </div>
    );
}
