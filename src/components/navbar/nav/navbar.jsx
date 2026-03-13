import React from 'react'

import { useMediaQuery } from 'react-responsive'

import './navbar.css'
import Actions from '../../common/actions/actions'
import NavMenu from '../../common/actions/menu'

export default function Navbar({ isNotFound }) {
    const isCollapsed = useMediaQuery({query: '(max-width: 800px)'})

    return (
        <nav id='home' className='navbar'>
            <div className="brand">
                <h1> {'< Radavelli />'} </h1>
            </div>

            {isCollapsed
                ? <NavMenu isNotFound={isNotFound} />
                : <Actions isNav={true} isNotFound={isNotFound} />
            }

        </nav>
    )
};
