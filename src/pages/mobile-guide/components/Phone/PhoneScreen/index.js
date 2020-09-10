import React from 'react'
import { StyledPhoneScreen, StyledImg } from './style'
import screen from '@images/screen1.png'
import screen1 from '@images/screen.png'
import screen2 from '@images/screen-second.png'
import screen3 from '@images/screen-third.png'
import { useSwipePhoneSlider } from '../../../hooks/use-swipe-phone-slider'

const PhoneScreen = ({ screenIndex }) => {
    const slider = useSwipePhoneSlider(screenIndex)

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
      }

    return (
        <StyledPhoneScreen ref={slider} {...settings}>
            <StyledImg src={screen} alt='myPhoto'/>
            <StyledImg src={screen1} alt='myPhoto'/>
            <StyledImg src={screen2} alt='myPhoto'/>
            <StyledImg src={screen3} alt='myPhoto'/>
        </StyledPhoneScreen>
    )
}

export default PhoneScreen