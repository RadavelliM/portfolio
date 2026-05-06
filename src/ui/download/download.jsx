import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import "./download.css";

export default function DownloadButton({ isAbout }) {
    const config = {
        className: isAbout ? "download" : "downloadAbout",
        buttonClass: isAbout ? "downloadBtn" : "downloadBtnAbout",

        initial: isAbout ? { opacity: 0, left: "60%" } : { opacity: 0 },
        animate: isAbout ? { opacity: 1, left: "50%" } : { opacity: 1 },
        transition: isAbout
            ? { delay: 0.5, duration: 2 }
            : { delay: 1.5, duration: 3 }
    };

    return (
        <motion.div
            initial={config.initial}
            whileInView={config.animate}
            transition={config.transition}
            className={config.className}
        >
            <a
                className={config.buttonClass}
                href="/Curriculo.pdf"
                download="CurriculoHenriqueRadavelli.pdf"
            >
                <FiDownload className="icon" />
                Baixar Currículo
            </a>
        </motion.div>
    );
}
