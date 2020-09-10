import Slider from 'react-slick'
import styled from 'styled-components'
import { device } from '../../style'

export const StyledTerminalScreenSlider = styled(Slider)`
    margin: auto;
`

export const StyledTerminalSlide = styled.img`
    height: 45vh;

    @media ${device.mobile} {
        height: 58vh;
    }

    @media ${device.tablet} {
        height: 60vh;
    }

    @media ${device.laptopS} {
        height: 63vh;
    }

    @media ${device.laptop} {
        height: 66.8vh;
    }

    @media ${device.laptopL} {
        height: 56vh;
    }
`
