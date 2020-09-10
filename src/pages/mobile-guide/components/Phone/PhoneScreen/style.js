import styled from 'styled-components'
import Slider from 'react-slick'
import { device } from '@components/style'

export const StyledPhoneScreen = styled(Slider)`
    border-radius: 1.1rem/1.7rem;
    position: absolute !important;

    height: 67vh;
    width: 33vh;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    @media ${device.laptopS} {
        max-height: 60vh;
        max-width: 29vh;
    }

    @media ${device.laptop} {
        max-height: 501px;
        max-width: 244px;
        min-height: 303px;
        min-width: 149px;

    }
    @media ${device.laptopL} {
        max-width: 243px;
        max-height: 505px;
        min-height: 352px;
        min-width: 174px;
    }

`

export const StyledImg = styled.img`
    display: inline-block;
    border-radius: 1.1rem/1.7rem;
    width: 100%;
    height: 67vh;

    top: 0;
    bottom: 0;
    margin: auto;

    @media ${device.laptopS} {
        max-height: 60vh;
    }

    @media ${device.laptop} {
        max-height: 500px;
        min-height: 301px;
    }
    @media ${device.laptopL} {
        min-height: 350px;
    }

`