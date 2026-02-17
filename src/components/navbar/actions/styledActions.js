import styled from 'styled-components'

const Div = styled.div`
    a {
        margin-right: ${props => props.isNav ? '30px' : '0px'};
        margin-left: ${props => props.isNav ? '0px' : '15px'};
    }
`

export default Div
