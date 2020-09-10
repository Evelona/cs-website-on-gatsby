import styled from 'styled-components'
import phone from '@images/phone.png'
import { device } from '@components/style'
import screen from '@images/screen1.png'
import screen1 from '@images/screen.png'

export const StyledMiniPhone  = styled.div`
    background: url(${phone}) no-repeat center;
    position: relative;
    background-size: contain;
    height: 525px;
    width: 272px;
    margin: 0 auto;

    @media ${device.laptopS} {
        margin: 0;
        height: 63vh;
        max-width: 33vh;
        display: none;
    }

    @media ${device.laptop} {
        display: none;
        height: 525px;
        width: 272px;
    }

`

export const StyledScreenMiniPhone = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    height: 93%;
    background: ${({ currentSection }) => (currentSection === '#main-section') ? `url(${screen})` : `url(${screen1})` } no-repeat center;
    background-size: cover;
    border-radius: 1.5rem;
`