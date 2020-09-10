import anton from '../../images/ninja.png'
import askar from '../../images/boss.png'
import evelina from '../../images/princess.png'
import memberPhoto from '../../images/soldier.png'
import styled from 'styled-components'
import { device } from '../style'

const chooseMemberPhoto = ({type}) => {
    switch(type){
        case 'Anton':
            return `url(${anton})`
        case 'Askar':
            return `url(${askar})`
        case 'Evelina':
            return `url(${evelina})`
        default:
            return `url(${anton})`
    }
}

export const StyledTeamSection = styled.section`
    background: linear-gradient(187.45deg, #000000 38.71%, #E2BA93 126.17%, #E2BA93 176.19%);
    text-align: center;

    padding-bottom: 8vh;

    @media ${device.tablet} {
        padding-bottom: 18vh;
    }
`

export const StyledTeamSectionHeading = styled.h2`
    font-size: 6vh;

    @media ${device.tablet} {
        font-size: 4.2vw;
    }
`


export const TeamContainer = styled.div`
    display: inline-grid;
    padding-top: 10vh;
    width: 95vw;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.6vh;

    @media ${device.tablet} {
        width: 70vw;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 33.33% 33.33% 33.33%;
        grid-row-gap: 14%;
    }
    
`

export const TeammateCard = styled.div``

export const TeammateImg = styled.div`
    display: inline-block;

    width: 25vw;
    height: 25vw;
    
    background-color: #fff;
    border-radius: 10rem;

    background: url(${memberPhoto}) center no-repeat;
    background-size: cover;
    
    &:hover {
        background: ${chooseMemberPhoto} center no-repeat;
        background-size: contain;
    }
    
    @media ${ device.tablet } {
        width: 15vw;
        height: 15vw;
    }
`
export const TeammateName = styled.p``

export const TeammateScope = styled.p``

