import React, { useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import NotFoundContent from "../../components/notFound/notFound404";

export default function NotFound() {
    useEffect(() => {
        window.document.title = "Página não encontrada";
    }, []);

    return (
        <div className="PageNotFound">
            <Navbar isNotFound={true} />

            <NotFoundContent />
        </div>
    );
}
