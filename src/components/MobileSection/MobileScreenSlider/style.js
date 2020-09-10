import Slider from 'react-slick';
import { device } from '../../style'
import styled from 'styled-components'

export const StyledSlide = styled.img`
    height: calc(-16.6666px + 146.651vw);
    min-width: 223.2px;
    min-height: 454.2px;

    @media ${device.mobile} {
        height: calc(-28.6666px + 72.651vw);
    }

    @media ${device.tablet} {
        height: calc(-25.6666px + 72.651vw);
    }

    @media ${device.laptopS} {
        height: calc(-25.6666px + 47.651vw);
    }

    @media ${device.laptop} {
        height: calc(-33.6666px + 47.851vw);
    }

    @media ${device.laptopL}{
        height: calc(-33.6666px + 47.851vw);
    }
`

export const StyledSlider = styled(Slider)`
    width: 101%;
    margin: auto;
`