import bgmobile from '@images/bg-mobile.png'
import { device } from '../style'
import phone from '@images/phone-big.png'
import styled from 'styled-components'

export const StyledMobileSection = styled.section`
    background: radial-gradient(93.37% 93.37% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%), url(${bgmobile}) no-repeat;
    background-size: cover;
    display: grid;
    align-items: center;
    width: 100%;
    height: calc(380.360px + 107.387vw);
    margin: 0;

    grid-gap: 0;
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: 26vh 95vh;
    grid-template-areas: "heading heading"
                         "mobile paragraf";


    @media ${device.mobile} {
        padding-top: 20vh;
        height: 80vh;
        grid-template-columns: repeat(2, 49vw);
        grid-template-rows: 10vh 30vh;
        grid-template-areas: "mobile heading"
                             "mobile paragraf";
        grid-gap: 3vw;
    }

    @media ${device.tablet} {
        padding-top: 17vh;
        padding-bottom: 7vh;                   //чтобы не залезал на след секцию
        height: 95vh;
        grid-template-columns: 51% 53%;
        grid-template-rows: 41vh 0vh;
        grid-gap: 1%;
        grid-template-areas: "mobile heading"
                             "mobile paragraf";
        align-items: center;
    }

    @media ${device.laptopS} {
        padding-top: 11vh;
        padding-bottom: 0;
        height: 89vh;                          //иначе высота засчет padding-top увеличивается
        grid-template-columns: 46% 53%;
        grid-template-rows: 41vh 0vh;
        grid-gap: 1%;
        grid-template-areas: "mobile heading"
                             "mobile paragraf";
        align-items: center;
    }

    @media ${device.laptop} {
        padding-top: 15vh;
        height: 85vh;                         //иначе высота засчет padding-top увеличивается
        grid-template-columns: 46% 53%;
        grid-template-rows: 41vh 0vh;
        grid-gap: 1%;
        grid-template-areas: "mobile heading paragraf"
                             "mobile paragraf";
        align-items: center;
    }




`

export const StyledMobileParagraf = styled.p`
    grid-area: paragraf;
    min-width: 236.8px;
    display: ${({current, part,  currentBeforeChange})=> current === part ? 'block' : 'none'};

    max-width: 74vw;
    width: 74vw;
    z-index: 2;
    padding: 3vh 3vw;
    transform: translateX(-39%);
    background: rgba(0, 0, 0, 0.8);


    @media ${device.mobile} {
        position: static;
        max-width: 40vw;
        padding: 0;
        background: none;
        transform: none;     // отмена
    }
`

export const StyledMobileHeading = styled.h2`
    grid-area: heading;
    display: ${({current, part,  currentBeforeChange})=> current === part ? 'block' : 'none'};

    text-align: center;
    font-size: 6vh;

    @media ${device.mobile} {
        transform: translateX(0);
        width: fit-content;
        font-size: 4.6vw;
    }

    @media ${device.tablet} {
        position: static;
        transform: none;
        padding-bottom: 2vh;
    }
`

export const MobileBody = styled.div`
    grid-area: mobile;
    position: relative;
    transition: transform 0 ease-in;
    background: url(${phone}) no-repeat;
    min-width: 249.6px;
    min-height: 547.71px;

    background-size: contain;
    padding-top: 3%;

    top: 41%;
    width: 78vw;
    height: calc(-28.6666px + 178.651vw);

    @media (max-width: 576px) {
        transform: translate(-12%, -39vh);
    }

    @media ${device.mobile} {
        top: 20%;
        left: 100%;
        transform: translate(-100%, 20vh);
        width: 38vw;
        height: calc(-28.6666px + 155.651vw);
    }

    @media ${device.tablet} {
        top: 8%;
    }

    @media ${device.laptopS} {
        top: 15%;
        width: 25vw;
        height: calc(-28.6666px + 50.651vw);
    }

    @media ${device.laptopL} {
        top: 10%;
    }

`

export const MobileCamera = styled.img`
    position: absolute;
    left: 25%;
    z-index: 10;
    width: 50%;

    top: 1.9%;

    @media ${device.mobile} {
        top: .9%;
    }

    @media ${device.tablet} {
        top: 1.1%;
    }

    @media ${device.laptopS} {
        top: 2.5%;
    }
`

export const MobileDiv = styled.div`
    height: 100vh;
    z-index: 2;
    text-align: right;
`

export const MobileScreen = styled.div`
    margin: auto;
    overflow: hidden;

    .slick-dots {
        bottom: 30px !important;
    }

    width: 67vw;
    margin-top: 3vw;
    height: calc( 7.043px + 138.490vw);
    border-radius: 1.5rem/1.5rem;

    @media ${device.mobile} {
        width: 34.5vw;
        min-width: 223px;
        min-height: 452.2px;
        height: calc(-28.6666px + 72.651vw);
        border-radius: 2rem/1.7rem;
        margin-top: .3vh;
    }

    @media ${device.tablet} {
        width: 34vw;
        height: calc(-16.6666px + 70.651vw);
        border-radius: 2rem/ 2rem;
    }

    @media ${device.laptopS} {
        width: 22vw;
        height: calc(-16.6666px + 46.651vw);
        border-radius: 1.2rem/ 1.2rem;
    }

    @media ${device.laptop} {
        width: 21.5;
        height: calc(-34.6666px + 47.651vw);
        border-radius: 1.9rem/1.9rem;
    }

    @media ${device.laptopL}{
        height: calc(6.6px + 44.5vw);
    }

    @media ${device.desktop} {
        height: calc(-33.6666px + 46.351vw);
        border-radius: 3rem/ 3.1rem;
    }
`