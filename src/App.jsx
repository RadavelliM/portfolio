import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SPA from "./pages/SPA/spa";
import NotFound from "./pages/notFound/notFoundMount";

export default function App() {
    useEffect(() => {
        const handleDisableDragImg = () => {
            const getImages = document
                .querySelectorAll("img")
                .forEach((imag) => imag.setAttribute("draggable", "false"));
        };
        handleDisableDragImg();

        const observer = new MutationObserver(() => handleDisableDragImg());
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SPA />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
