import Slider from 'react-slick';
import styled from 'styled-components' 
import { device } from '../../style'

export const StyledSlider = styled(Slider)`
    display: block;
    backgroung-color: red;
    outline: none;
    user-select: none;
    z-index: 10;  // иначе телефон

    @media ${device.laptopS} {
        display: none;
    }
`