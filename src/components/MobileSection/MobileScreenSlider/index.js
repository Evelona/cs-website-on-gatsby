import React from "react";
import { StyledSlide, StyledSlider } from './style'
import screen from '@images/screen1.png'
import screen2 from '@images/screen1.png'
import screen3 from '@images/screen1.png'

const SimpleSlider = ({ setAfterChangeCurrentSlide }) =>  {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: current => setAfterChangeCurrentSlide(current)
  }
  return (
    <StyledSlider {...settings}>
      <StyledSlide className='slidex' src={screen}></StyledSlide>
      <StyledSlide src={screen2}></StyledSlide>
      <StyledSlide src={screen3}></StyledSlide>
    </StyledSlider>
  )
}

export default SimpleSlider