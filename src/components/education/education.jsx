import React from "react";

import { motion } from "framer-motion";

import styles from "./education.module.css";
import Graduation from "./graduation/graduation";
import Courses from "./course/course";
import DivisorSpace from "../../ui/divisorSpace/divisorSpace";

export default function Education() {
    return (
        <div id="education" className={styles.education}>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
            >
                Formações Acadêmicas
            </motion.h1>

            <div className={styles.educationInfo}>
                <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    Graduação, cursos e certificados na área
                </motion.h4>
            </div>

            <Graduation />
            <DivisorSpace space="100px" />
            <Courses />
        </div>
    );
}
