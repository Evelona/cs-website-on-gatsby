import styled from 'styled-components'
import { device } from '../style'
import terminalBG from '../../images/bg-terminal.png'

export const StyledTerminalSection = styled.section`
    background: radial-gradient(93.37% 93.37% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%), url(${ terminalBG }) no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    text-align: center;
    height: 100vh;
    overflow-x: hidden;

    // @media ${device.mobile} {
    //     height: 125vh;
    // }

    // @media ${device.laptopL} {
    //     height: 140vh;
    // }
`

export const StyledTerminalHeading = styled.h2`
    padding-bottom: 8vh;

    @media ${device.mobileS} {
        font-size: 6vh;
    }

    @media ${device.tablet} {
        font-size: 4.2vw;
    }

`
export const StyledTerminalParagraf = styled.p`
    display: inline-block;
    position: relative;                                  // чтобы на терминале было, а не под ним
    background: rgba(0,0,0,0.8);
    z-index: 2;
    text-align: left;

    padding: 2vh 2vw;
    max-width: 80vw;
    top: 24vh;

    @media (min-width: 450px) {
        top: 35vh;
    }
    

    @media ${device.mobile} {
        max-width: 75vw;
        top: 41vh;
        text-align: center;
    }

    @media ${device.tablet} {
        top: 45vh;
    }

    @media (min-width: 670px) {
        top: -5vh;
        padding: 2vh 2vw 0 2vh;
        background-color: transparent;
    }

    @media ${device.laptopS} {
        max-width: 70vw;
    }

    @media ${device.laptop} {
        max-width: 84vw;
    }
`
export const Terminal = styled.div`
    background-color: #454545;
    display: inline-flex;
    align-items: flex-end;                      // Для ножки терминала
    position: absolute;
    border: 1px solid #919191;
    box-shadow: 0px 4px 100px #000000;
    min-width: 600px;
    max-width: 1805px;
    
    top: 11%;
    left: 15%;
    width: 35vw;   
    height: 55vh; 
    transform-origin: right bottom;
    transform: perspective(1000px) rotate3d(1, 0, 0, 30deg) translateX(0);

    @media ${device.mobile} {
        width: 50vw;   
        height: 70vh;
        transform: perspective(1000px) rotate3d(1, 0, 0, 34deg) translateX(0);
        top: 5%;
    }

    @media (min-width: 670px) {
        width: 50vw;
        height: 70vh;
        top: 23%;   
        left: 0;
        right: 0;
        margin: 0 auto;
        transform-origin: center bottom;
        transform: perspective(800px) rotate3d(1, 0, 0, 35deg) translateX(0);
    }

    @media ${device.laptopS} {
        width: 59vw;
        height: 77vh;
        top: 18%;
        transform: perspective(1000px) rotate3d(1, 0, 0, 40deg) translateX(0);
    }

    @media ${device.laptop} {
        top: 16%;
    }

    @media ${device.laptopL} {
        top: 27%;
        height: 65vh;
        width: 62vw;
        transform: perspective(1000px) rotate3d(1, 0, 0, 30deg) translateX(0);
    }

    @media ${device.desktop} {
        transform: perspective(1000px) rotate3d(1,0,0,22deg) translateX(0);
    }
    
`

export const TerminalScreen = styled.div`
    position: relative;
    background-color: black;
    width: 90%;
    margin: auto;

    height: 45vh;   

    @media ${device.mobile} {  
        height: 55vh;
    }

    @media ${device.tablet} {  
        height: 59vh;
    }

    @media ${device.laptopS} {
        height: 62vh;
    }

    @media ${device.laptop} {
        height: 66vh;
    }

    @media ${device.laptopL} {
        height: 55vh;
    }
`

export const TerminalLeg = styled.div`
    position: absolute;
    min-width: 600px;
    max-width: 1805px;
    height: 8vh;
    background: linear-gradient(180deg,#686262 60%,rgba(196,196,196,0) 267.74%);
    transform: perspective(1000px) rotate3d(1,0,0,-242deg);
    transform-origin: center bottom;
    
    width: 65vw;

    @media ${device.tablet} {
        width: 59vw;
    }

    @media ${device.laptopL} {
        width: 62vw;
    }
`