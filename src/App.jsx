import React from 'react'
import Navbar from './components/navbar/nav/navbar'
import HeroSection from './components/heroSection/heroSection'
import TechStack from './components/techStack/techStack'
import DivisorSpace from './components/common/divisorSpace/divisorSpace'
import Footer from './components/footer/footer'


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <HeroSection />
            <DivisorSpace space="300px"/>
            <TechStack />
            <DivisorSpace space="300px"/>

            <Footer />
        </div>
    )
};
