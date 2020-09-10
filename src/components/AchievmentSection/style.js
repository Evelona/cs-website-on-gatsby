import styled from 'styled-components'
import { device } from '../style'

export const AchievSection = styled.section`
    padding: 2vh 0;
    height: 20vh;
    background-color: #000;
`
export const AchieveNonSliderDiv = styled.div`
    display: none;
    @media ${device.laptopS} {
        display: grid;
    }
    
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, calc(99%/3));
    align-items: center;
`

export const AchieveSliderDiv = styled.div`
    display: block;

    @media ${device.laptopS} {
        display: none;
    }
`

export const StyledAchivCard = styled.div`
    &.right{
        text-align: left;
    }
    &.center{
        text-align: center;
    }
    &.left{
        text-align: right;
    }
`

export const StyledAchivNumber = styled.div`
    display: inline-block;
    vertical-align: middle;
    font-weight: 100;
    font-size: 16.3vh;
    text-align: right;
`

export const StyledTextSide = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: auto 0 auto 0.3vw;
    text-align: left;
    line-height: 5.5vh;
`

export const StyledAchievHeading = styled.div`
    font-weight: 300;
    font-size: 6.5vh;
    line-height: calc(14.223px + 7.816vh);
`

export const StyledAchivPargraf = styled.div`
    text-align: left;
    font-style: normal;
    font-weight: 300;
    font-size: 3.5vh;
`

