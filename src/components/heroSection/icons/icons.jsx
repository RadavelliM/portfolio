import React from 'react'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import './icons.css'

const socialData = [
    {
        title: 'GitHub',
        link: 'https://github.com/RadavelliM/RadavelliM',
        IconNormal: <FiGithub />,
        IconFooter: <AiFillGithub />
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/henrique-radavelli-821a64367/',
        IconNormal: <FiLinkedin />,
        IconFooter: <AiFillLinkedin />
    },
    {
        title: 'E-mail',
        link: 'mailto:henriqueradavellimachado@gmail.com',
        IconNormal: <FiMail />,
        IconFooter: <AiFillMail />
    }
]

export default function Icons({ isFooter }) {
    const containerClass = isFooter ? "iconsFooter" : "icons";

    return (
        <div className={containerClass}>
            {socialData.map(social => (
                <a
                    key={social.title}
                    title={social.title}
                    target='_blank'
                    rel='noreferrer'
                    href={social.link}
                >
                    {isFooter ? social.IconFooter : social.IconNormal}
                </a>
            ))}
        </div>
    )
};
