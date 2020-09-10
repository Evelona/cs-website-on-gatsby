import styled from 'styled-components'
import { device } from '@components/style'
import bgmobile from '@images/bg-mobile.png'


export const StyledSection = styled.section`
    min-height: 180vh;
    background: radial-gradient(93.37% 93.37% at 50% 50%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%), url(${bgmobile}) no-repeat;
    background-size: cover;

    @media ${device.laptopS} {
        min-height: 450px;
        height: 100vh;
    }

    @media ${device.laptop} {
        background: radial-gradient(93.37% 93.37% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%), url(${bgmobile}) no-repeat;
        height: 100vh;
        background-size: cover;

    }
`

export const MobileGuideHeading = styled.h2`
    font-size: 40px;
    text-align: center;
    padding: 17vh 0 10vh 0;

    @media ${device.laptopS} {
        padding-bottom: 5vh;
        padding-top: 13vh;
        font-size: 50px;
        text-align: start;
    }

    @media ${device.laptop} {
        padding: 0 0 3vh 0;
        font-size: 3.7vw;
    }
`

export const MobileGuideParagraf = styled.p`
    line-height: normal;
    max-width: 80vw;
    text-align: center;
    padding: 4vh 0 3vh 0;
    font-size: calc(20.255px + 0.7vw);

    @media ${device.laptopS} {
        font-size: calc(17.255px + 0.5vw);
        padding: 0;
        text-align: left;
    }

    @media ${device.laptop} {
        font-size: calc(17.255px + 0.7vw);
        font-size: 22px;
        max-width: 50vw;
        text-align: start;
        padding: 0;
    }

    @media ${device.laptopL} {
        font-size: 26px;
        max-width: 50vw;
    }
`

export const SectionContainer = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    max-width: 85%;
    justify-content: flex-start;

    @media ${device.laptopS} {
        max-width: 57%; 
        justify-content: center;
        padding-left: 30vw;
    }

    @media ${device.laptop} {
        max-width: 42%;
        justify-content: center;
        padding-left: 0;
    }
`

export const DarkDiv = styled.div`
    align-self: center;
    
    min-width: 80%;
    padding: 2vw;
    margin: 100px 0;  

    @media ${device.laptopS} {
        margin: 0;
        width: 47vw; 
        min-width: 0; 
        padding: 0;

    }

    @media ${device.laptop} {
        width: fit-content;
        background: none;
    }
`

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.laptopS} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media ${device.laptop} {
        flex-direction: column;
    }
`