import React from 'react'

import './footer.css'
import Icons from '../heroSection/icons/icons'
import Actions from '../navbar/actions/actions'


function currentYear() {
    const data = new Date()
    return data.getFullYear()
}

export default function Footer() {
    return (
        <footer>

            <Icons />

            <Actions isNav={false}/>

            <div className="msg">
                <h3 className='rights'>Henrique Radavelli Machado. Todos os direitos reservados - {currentYear()}</h3>
            </div>


        </footer>
    )
};
