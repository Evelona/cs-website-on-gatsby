import styled from 'styled-components'
import { TEXT_COLOR,device } from '@components/style'
import { Link } from 'gatsby'

export const StyledSectionMenu = styled.div`
    position: fixed;
    flex-direction: column;
    justify-content: space-around;
    height: 15vh;
    top: 0;
    bottom: 0;
    margin: auto 0;

    display: none;
    right: 7%;

    @media ${device.laptop} {
        display: flex;
        right: 5%;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${TEXT_COLOR};
    font-weight: 100;
    font-size: 22px;
`

export const Icon = styled.div`
    background-color: ${(props) => (props.section === props.current) ? `${TEXT_COLOR};` : `transparent`};
    width: 8.8px;
    height: 8.8px;
    border: 2px solid ${TEXT_COLOR};
    border-radius: 100%;
    display: inline-block;
    margin-right: 1vw;
`