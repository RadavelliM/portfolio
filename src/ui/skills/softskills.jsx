import React from "react";

import styles from "./softskills.module.css";
import Skills from "./skills";

export default function SoftSkills() {
    return (
        <div className="softskills">
            <div className={styles.skillsinfo}>
                <h1 className={styles.skillsTitle}>Soft Skills</h1>
                <h3 className={styles.skillsDesc}>
                    Confira abaixo o conjunto e a descrição das minhas
                    habilidades comportamentais
                </h3>
            </div>

            <Skills
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt
                enableMagnetism={false}
                clickEffect
                spotlightRadius={540}
                particleCount={20}
                glowColor="132, 0, 255"
                disableAnimations={false}
            />
        </div>
    );
}
