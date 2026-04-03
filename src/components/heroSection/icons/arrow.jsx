import React from "react";

import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

import "./arrow.css";

export default function ArrowDown() {
    return (
        <motion.div
            className="arrow"
            animate={{ y: [0, -25, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 3 }}
                className="arrowDown"
            >
                <FiArrowDown
                    onClick={() => (window.location.href = "#about")}
                />
            </motion.div>
        </motion.div>
    );
}
