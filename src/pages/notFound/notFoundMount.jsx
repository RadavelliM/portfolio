import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import NotFoundContent from "../../components/notFound/notFound404";

export default function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        window.document.title = "Página não encontrada";
        navigate("/notfound");
    }, [navigate]);

    return (
        <main className="PageNotFound">
            <Navbar isNotFound={true} />

            <NotFoundContent />
        </main>
    );
}
