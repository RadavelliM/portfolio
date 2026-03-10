import React, {useState, useEffect} from 'react'

import './heroSection.css'

//  componentes da nav
import MainContent from './content/mainContent';
import Icons from './icons/icons';
import DownloadButton from '../common/download/download';
import ArrowDown from './icons/arrow';

export default function HeroSection() {

    return (
        <div className="heroSection">

            <MainContent />

            <DownloadButton isAbout={true} />

            <Icons />

            <div className="seta">
                <ArrowDown />
            </div>

        </div>
    )
};
