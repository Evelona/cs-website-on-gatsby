import { StyledTerminalScreenSlider, StyledTerminalSlide } from './style'

import React from "react";
import testBg1 from '../../../images/trash-1.jpg'
import testBg2 from '../../../images/trash-2.jpg'

const TerminalScreenSlider = () => {
  const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
        <StyledTerminalScreenSlider {...settings}>
          <StyledTerminalSlide src={testBg1}/>
          <StyledTerminalSlide src={testBg2}/>
        </StyledTerminalScreenSlider>
    )
}

export default TerminalScreenSlider