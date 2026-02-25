import React from 'react'

import styles from './contact.module.css'
import Form from './form/form'
import Icons from '../heroSection/icons/icons'

export default function Contact() {
    return (
        <div id='contact' className={styles.contact}>
            <h1>Contato</h1>

            <Form />

            <div className={styles.iconsWrapper}>
                <Icons />
            </div>

        </div>
    )
};
