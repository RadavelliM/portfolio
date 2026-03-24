import styled from 'styled-components'

const Div = styled.div`
    a {
        margin-right: ${props => props.isNav ? '30px' : '15px'};
        margin-left: ${props => props.isNav ? '0px' : '15px'};
        color: var(--letterColorAction);
        transition: 400ms;
        display: inline-flex;
    }

    a:hover {
        color: white;
        transform: translateY(-5px);
    }


    @media (max-width: 500px) {
        a {
            font-size: ${props => props.isNav ? '0px' : '20px'};
            margin-bottom: 10px;
            gap: 30px;
        }
    }
`

export default Div
