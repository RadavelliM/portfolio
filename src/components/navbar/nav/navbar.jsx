import React from 'react'

import './navbar.css'
import Actions from '../actions/actions'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="brand">
                <h1> {`< Radavelli />`} </h1>
            </div>

            <Actions isNav={true} />
        </nav>
    )
};
