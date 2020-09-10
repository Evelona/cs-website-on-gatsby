import React from 'react'
import { StyledSlider } from './style' 
import { StyledAchivCard, StyledTextSide, StyledAchivNumber, StyledAchievHeading, StyledAchivPargraf} from '../style'

const AchieveSlider = () =>  {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    }
    return (
      <StyledSlider {...settings}>
        <div>
            <StyledAchivCard className='center'>
                <StyledAchivNumber>27</StyledAchivNumber>

                <StyledTextSide>
                    <StyledAchievHeading>Проектов</StyledAchievHeading>
                    <StyledAchivPargraf>выполнено</StyledAchivPargraf>
                </StyledTextSide>
            </StyledAchivCard>

        </div>
        <div>

            <StyledAchivCard className='center'>
                <StyledAchivNumber>5</StyledAchivNumber>

                <StyledTextSide>
                    <StyledAchievHeading>Лет</StyledAchievHeading>
                    <StyledAchivPargraf>на рынке</StyledAchivPargraf>
                </StyledTextSide>
            </StyledAchivCard>

        </div>
        <div>

            <StyledAchivCard className='center'>
                <StyledAchivNumber>17</StyledAchivNumber>

                <StyledTextSide>
                    <StyledAchievHeading>Музеев</StyledAchievHeading>
                    <StyledAchivPargraf>обслужено</StyledAchivPargraf>
                </StyledTextSide>
            </StyledAchivCard>

        </div>
      </StyledSlider>
    )
  }
  
  export default AchieveSlider