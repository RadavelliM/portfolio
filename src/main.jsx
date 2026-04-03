import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";

console.log(
    "%cAplicação desenvolvida com React + Vite!",
    "font-size: 40px; color: #a700e3; text-align: center;"
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
