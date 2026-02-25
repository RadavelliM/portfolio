import React from 'react'

import { AiOutlineSend } from 'react-icons/ai'
import { LuSend } from 'react-icons/lu'
import styles from './form.module.css'

const formInfo = [

]

export default function Form() {
    return (
        <form action="">

            <div className={styles.formInput}>
                <input required type="text" id='name' placeholder='' name='name' />
                <label htmlFor="name">Nome</label>
            </div>

            <div className={styles.formInput}>
                <input required type="email" id='email' placeholder='' name='email' />
                <label htmlFor="name">Email</label>
            </div>

            <div className={styles.formInput}>
                <input required type="text" id='subject' placeholder='' name='subject' />
                <label htmlFor="subject">Assunto</label>
            </div>

            <div id='containerContent' className={styles.formInput}>
                <textarea required placeholder='' name="content" id={styles.content}></textarea>
                <label htmlFor="content">Conteúdo</label>
            </div>

            <div className={styles.formInput}>
                <button id={styles.formSubmit} type='submit'> <LuSend className={styles.formIcon} /> Enviar Menssagem</button>
            </div>

        </form>
    )
};
