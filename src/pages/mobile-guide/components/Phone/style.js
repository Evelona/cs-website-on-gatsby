import styled from 'styled-components'
import phone from '@images/phone.png'
import { device } from '@components/style'

export const StyledPhone = styled.div`
    background: url(${phone}) no-repeat center;
    background-size: contain;
    position: fixed;
    top: 5%;
    bottom: 0;
    margin: auto 0;

    display: none;
    width: 300px;   //Жесткое позиционирование

    @media ${ device.laptopS } {
        min-height: 324px;
        display: inline-block;
        width: 282px;
        height: 72vh;
        left: 4%;
    }

    @media ${ device.laptop } {
        min-height: 324px;
        display: inline-block;
        width: 282px;
        height: 72vh;
        left: 4%;
    }

    @media ${ device.laptopL } {
        background: url(${phone}) no-repeat center;
        background-size: contain;
        position: fixed;
        top: 5%;
        bottom: 0;
        margin: auto 0;

        min-height: 380px;
        left: 5%;
    }
`