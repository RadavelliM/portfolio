import React from 'react'
import { Link } from 'react-router-dom';

import  Div  from './styledActions';



const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Formação", href: "#education" },
  { label: "Stack", href: "#techStack" },
  { label: "Idiomas", href: "#idioms" },
  { label: "Contato", href: "#contact" }
];

export default function Actions({ isNav, isNotFound }) {
    return (
        isNotFound
        ? <Div isNav={isNav}> <Link className='navActions' to="/">Página inicial</Link> </Div>
        : <Div isNav={isNav} className="navActions">
                {navItems.map(itens => (
                    <a key={itens.href} href={itens.href}>{itens.label} </a>
                ))}
            </Div>
    )
};
