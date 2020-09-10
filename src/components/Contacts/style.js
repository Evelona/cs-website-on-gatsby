import { LIGHT_BG, device } from '../style'
import styled from 'styled-components'

export const ContactSection = styled.section`
    padding-bottom: 10vh;
    font-size: calc(17.255px + 0.7vw);
    background-color: ${LIGHT_BG};
    a {color: black !important;}
`

export const ContactHeader = styled.h2`
    padding-bottom: 5vh;
    text-align: center;
    color: black;
    font-size: 6vh;

    @media ${device.tablet} {
        font-size: 4.2vw;
    }
`

export const ContactNumbersDiv = styled.div`
    text-align: center;

    & a {
        display: block;
        :first-child {
            padding-bottom: 2vh;
        }
        
    }

    @media ${device.tablet} {
        text-align: right;
    }
`
export const ContactsContent = styled.div`
    display: grid;
    grid-gap: 20%;
    grid-template-rows: 1fr 1fr;
    margin: 0 auto;
    
    a {font-weight: 200;}

    @media ${device.tablet} {
        grid-template-columns: 40% 40%;
        grid-template-rows: 1fr;
        grid-gap: 20%;
        a{font-size: calc( 7.55px + 1.7vw);}
    }
`

export const ContactsEmailsDiv = styled.div`
    text-align: center; 

    @media ${device.tablet} {
        text-align: left;
    }
`

export const ContactsSocialMediaDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2%;

    @media ${device.tablet} {
        justify-content: flex-start;
        padding-top: 0;
    }

`

export const ContactsNumber = styled.a`
    text-decoration: none;
    :last-child {
        padding-bottom: 0;
    }
`

export const ContactsEmail = styled.a`
    text-decoration: none;
    padding-bottom: 2vh;
`

export const ContactsSocialMedia = styled.div`
    img {
        width: calc( 17.395px + 3.521vw);
    }
`