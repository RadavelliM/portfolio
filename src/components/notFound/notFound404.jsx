import React, { useEffect } from "react";

import "./notFound404.css";

export default function NotFoundContent() {
    return (
        <div className="pageNotFound">
            <div className="notFoundMsg">
                <div className="starterMsg">
                    <h1>404</h1>
                </div>

                <div className="mainMsg">
                    <h1>Parece que a página que você procura não existe</h1>
                </div>
            </div>
        </div>
    );
}
