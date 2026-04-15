import React from "react";

import "./footer.css";
import Icons from "../../ui/icons/icons";
import Actions from "../../ui/actions/actions";

function currentYear() {
    const data = new Date();
    return data.getFullYear();
}

export default function Footer() {
    return (
        <footer>
            <Icons isFooter={true} />

            <Actions isNav={false} />

            <div className="msg">
                <h3 className="">Desenvolvido com React, Vite, GSAP, WebGL</h3>
                <h3 className="rights">
                    Henrique Radavelli Machado - {currentYear()}
                </h3>
            </div>
        </footer>
    );
}
