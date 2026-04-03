import React from "react";

import { useMediaQuery } from "react-responsive";

import "./navbar.css";
import Actions from "../../ui/actions/actions";
import NavMenu from "../menu/menu";

export default function Navbar({ isNotFound }) {
    const isCollapsed = useMediaQuery({ query: "(max-width: 900px)" });

    return (
        <nav id="home" className="navbar">
            <div className="navMainActions">
                <div className="brand">
                    <h1> {"< Radavelli />"} </h1>
                </div>

                {isCollapsed ? (
                    <NavMenu isNotFound={isNotFound} />
                ) : (
                    <Actions isNav={true} isNotFound={isNotFound} />
                )}
            </div>
        </nav>
    );
}
