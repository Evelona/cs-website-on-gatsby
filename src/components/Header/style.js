import { TEXT_COLOR, device } from '../style'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    min-width: 292px;
    width: 89.7vw;                           /*из-за паддингов внутренних*/
    padding: 3.5vw;

    @media ${device.mobile} {
        width: 90.2vw;
    }

    @media ${device.tablet} {
        width: 91.8vw;
        padding: 3vw;
    }

    @media ${device.laptop} {
        top: 0;
        width: calc(100% - 5vh - 3.9vw);    /*минус падинги боковые*/
        padding: 5vh 3.9vw 0 5vh;           /*в противном случае выезжает за экран*/
        background-color: transparent;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
`

export const StyledLogo = styled.img`
    height: 5vh;
    
    @media ${device.laptopS} {
        width: 15vw;
        height: 7vh;
    }

`

export const StyledMenu = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    letter-spacing: 0.025em;
`

export const Menunav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    @media ${device.laptopS} {
        display: flex;
    }
`

export const StyledMenuItem = styled.li`
    display: inline-block;
    margin-right: calc(7.573px + 1.26vw);
    font-weight: 200;
    font-size: calc(.8vw + 7px);
    color: ${TEXT_COLOR};

    & line {
        ${({ selected }) => (selected) ? `stroke-dasharray: 6 0 ;` : ``}
        transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease;
    }
    :last-child {
        margin-right: 0;
    }
    :hover line {
        stroke-dasharray: 6 0;
        stroke-dashoffset: 3;
    }
`

export const StyledLink = styled(Link)`
    color: ${TEXT_COLOR};
    text-decoration: none;
`

export const SelectingLine = styled.div`
    position: relative;
    width: 100%;
    height: 1px;

    & svg {
        position: absolute;
        left: 0;
        top: 0;
        height: 1px;
        max-width: 400px;
    }
`

export const BurgerMenuDiv = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 28px;
    width: 30px;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;

    @media ${device.laptopS} { /*Скрывает элеиенты меню*/
        display: none;
    }
`
export const BurgerMenuLine = styled.div`
    width: 30px;
    height: 1.5px;
    background-color: white;
`
