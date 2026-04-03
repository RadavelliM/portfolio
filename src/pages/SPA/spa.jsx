import React, { useEffect } from "react";

import DivisorSpace from "../../ui/divisorSpace/divisorSpace";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/heroSection/heroSection";
import TechStack from "../../components/techStack/techStack";
import About from "../../components/about/about";
import Education from "../../components/education/education";
import Contact from "../../components/contact/contact";
import Languages from "../../components/languages/languages";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";

export default function SPA() {
    useEffect(() => {
        window.document.title = "Portfólio";
    }, []);

    return (
        <div className="container">
            <Navbar />
            <HeroSection />
            <DivisorSpace space="200px" />
            <About />
            <DivisorSpace space="200px" />
            <Education />
            <DivisorSpace space="400px" />
            <TechStack />
            <DivisorSpace space="300px" />
            <Languages />
            <DivisorSpace space="100px" />
            <Projects />
            <DivisorSpace space="200px" />
            <Contact />
            <DivisorSpace space="200px" />
            <Footer />
        </div>
    );
}
