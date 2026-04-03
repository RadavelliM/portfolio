import React from "react";

import { motion } from "framer-motion";
import { LuSend } from "react-icons/lu";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./form.module.css";
import formFields from "./form";

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
                        autoComplete="off"
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
    );
}

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": form.getAttribute("name"), ...data })
        })
            .then(() => {
                toast.success("Mensagem enviada com sucesso!");
                form.reset();
            })
            .catch((error) => {
                toast.error("Erro ao enviar: " + error);
            });
    };

    return (
        <>
            <ToastContainer
                hideProgressBar={true}
                autoClose={2000}
                pauseOnHover={true}
            />

            <motion.form
                data-netlify="true"
                name="contato"
                method="POST"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                action=""
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input type="hidden" name="form-name" value="contato" />

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
                    <button id={styles.formSubmit} type="submit">
                        <LuSend className={styles.formIcon} />
                        Enviar Mensagem
                    </button>
                </div>
            </motion.form>
        </>
    );
}
