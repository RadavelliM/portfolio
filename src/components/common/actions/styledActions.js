import styled from 'styled-components'

const Div = styled.div`
    a {
        margin-right: ${props => props.isNav ? '30px' : '15px'};
        margin-left: ${props => props.isNav ? '0px' : '15px'};
        color: #f3737c;
        transition: 400ms;
        display: inline-flex;
        gap: 20px;
    }

    a:hover {
        color: #ad5158;
        transform: translateY(-5px);
    }
`

export default Div
