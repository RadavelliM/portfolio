import React from 'react'
import { motion } from 'framer-motion'
import { LuSend } from 'react-icons/lu'
import styles from './form.module.css'

const formFields = [
    { type: "text", name: "name", id: "name", label: "Nome" },
    { type: "email", name: "email", id: "email", label: "Email" },
    { type: "text", name: "subject", id: "subject", label: "Assunto" },
    { type: "textarea", name: "content", id: "content", label: "Conteúdo" }
]

function FormField({ type, name, id, label }) {
    return (
        <div className={styles.formInput}>
            {type !== "textarea" ? (
                <>
                    <input
                        type={type}
                        name={name}
                        id={id}
                        placeholder=""
                        autoComplete='off'
                    />
                    <label htmlFor={id}>{label}</label>
                </>
            ) : (
                <>
                    <textarea
                        name={name}
                        className={styles.content}
                        id={id}
                        placeholder=""
                    />
                    <label htmlFor={name}>{label}</label>
                </>
            )}
        </div>
    )
}

export default function Form() {
    return (
        <motion.form data-netlify="true"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            action=""
        >
            {formFields.map((field, index) => (
                <FormField
                    key={index}
                    type={field.type}
                    name={field.name}
                    id={field.id}
                    label={field.label}
                />
            ))}

            <div className={styles.formInput}>
                <button
                    id={styles.formSubmit}
                    type="submit"
                >
                    <LuSend className={styles.formIcon} />
                    Enviar Mensagem
                </button>
            </div>
        </motion.form>
    )
}
