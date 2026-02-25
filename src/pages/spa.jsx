import React from 'react'

import DivisorSpace from '../components/common/divisorSpace/divisorSpace'
import Navbar from '../components/navbar/nav/navbar'
import HeroSection from '../components/heroSection/heroSection'
import TechStack from '../components/techStack/techStack'
import About from '../components/about/about'
import Education from '../components/education/education'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'


export default function SPA() {
    return (
        <div className="container">
            <Navbar />
            <HeroSection />
            <DivisorSpace space="200px"/>
            <About />
            <DivisorSpace space="200px"/>
            <Education />
            <DivisorSpace space="400px"/>
            <TechStack />
            <DivisorSpace space="150px"/>
            <Contact />
            <DivisorSpace space="100px"/>
            <Footer />
        </div>
    )
};
