import React from 'react'

import { FiDownload } from 'react-icons/fi'

import { motion } from 'framer-motion'

import './download.css'

export default function DownloadButton({ isAbout }) {
    return (
        isAbout ?  <motion.div
            initial={{opacity: 0, left: "60%"}}
            whileInView={{opacity: 1, left: "50%"}}
            transition={{delay: 0.5, duration: 2}}
            className="download"
        >
            <a
                className="downloadBtn"
                href="/Profile.pdf"
                download="Curriculo.pdf"
            >
                <FiDownload className='icon'/>
                Baixar Currículo
            </a>
        </motion.div>

        :   <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.5, duration: 3}}
            className="downloadAbout"
        >
            <a
                className="downloadBtnAbout"
                href="/Profile.pdf"
                download="Curriculo.pdf"
            >
                <FiDownload className='icon'/>
                Baixar Currículo
            </a>
        </motion.div>

    )
};
