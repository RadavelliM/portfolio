import React, { useState, Fragment } from "react";

import { Link } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { LuMenu, LuX } from "react-icons/lu";
import styles from "./menu.module.css";

const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Formação", href: "#education" },
    { label: "Stack", href: "#techStack" },
    { label: "Idiomas", href: "#idioms" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" }
];

export default function NavMenu({ isNotFound }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className={styles.hamburger} onClick={() => setOpen(true)}>
                <LuMenu size={30} />
            </button>

            <Transition show={open} as={Fragment}>
                <Dialog onClose={setOpen} className={styles.dialogWrapper}>
                    <Transition.Child
                        as={Fragment}
                        enter={styles.overlayEnter}
                        enterFrom={styles.overlayEnterFrom}
                        enterTo={styles.overlayEnterTo}
                        leave={styles.overlayLeave}
                        leaveFrom={styles.overlayLeaveFrom}
                        leaveTo={styles.overlayLeaveTo}
                    >
                        <div className={styles.overlay} />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter={styles.panelEnter}
                        enterFrom={styles.panelEnterFrom}
                        enterTo={styles.panelEnterTo}
                        leave={styles.panelLeave}
                        leaveFrom={styles.panelLeaveFrom}
                        leaveTo={styles.panelLeaveTo}
                    >
                        <Dialog.Panel className={styles.offcanvas}>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setOpen(false)}
                            >
                                <LuX size={24} />
                            </button>

                            <div className={styles.menuLinks}>
                                {isNotFound ? (
                                    <Link className="navActions" to="/">
                                        Página inicial
                                    </Link>
                                ) : (
                                    navItems.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            onClick={() => setOpen(false)}
                                        >
                                            {info.label}
                                        </a>
                                    ))
                                )}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}
