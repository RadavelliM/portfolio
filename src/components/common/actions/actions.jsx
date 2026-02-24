import React from 'react'

import  Div  from './styledActions';

const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Formação", href: "#education" },
  { label: "Stack", href: "#techStack" },
  { label: "Contato", href: "#contact" }
];

export default function Actions({ isNav }) {
    return (
        <Div isNav={isNav} className="navActions">
            {navItems.map(itens => (
                <a key={itens.href} href={itens.href}>{itens.label} </a>
            ))}
        </Div>
    )
};
