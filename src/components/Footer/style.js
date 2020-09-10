import { TEXT_COLOR, device } from '../style'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    height: 10vh;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-around;
    color: ${TEXT_COLOR};    
`

export const StyledLogo = styled.img`
    padding-right: 15vw;
    width: 55vw;
    height: 5vh;
    max-width: 250px;

    // @media ${device.mobile} {
    //     width: 25vw;
    //     height: 7vh;
    // }

    @media ${device.laptopS} {
        width: 15vw;
        height: 7vh;
    }

`

export const StyledYear = styled.div`
    display: flex;
    font-size: calc( 7.4vw - 5.9718px );
    font-weight: 100;

    @media ${device.mobile} {
        font-size: calc( 4.3vw - 5.9718px );
    }

    @media ${device.tablet} {
        font-size: calc( 2.4vw - 5.9718px );
    }

    @media ${device.laptopS} {
        font-size: 18px;
    }
    
`