import { AchievSection, StyledAchievHeading, AchieveSliderDiv, AchieveNonSliderDiv, StyledAchivCard, StyledAchivNumber, StyledAchivPargraf, StyledTextSide} from './style'

import React from 'react'
import AchieveSlider from './AchieveSlider'

const AchievmentSection = () => {
    return (
        <AchievSection>
            <AchieveNonSliderDiv>
                    <StyledAchivCard className='left'>
                        <StyledAchivNumber>27</StyledAchivNumber>

                        <StyledTextSide>
                            <StyledAchievHeading>Проектов</StyledAchievHeading>
                            <StyledAchivPargraf>выполнено</StyledAchivPargraf>
                        </StyledTextSide>
                    </StyledAchivCard>

                    <StyledAchivCard className='center'>
                        <StyledAchivNumber>5</StyledAchivNumber>

                        <StyledTextSide >
                            <StyledAchievHeading>Лет</StyledAchievHeading>
                            <StyledAchivPargraf>на рынке</StyledAchivPargraf>
                        </StyledTextSide>
                    </StyledAchivCard>

                    <StyledAchivCard className="right">
                        <StyledAchivNumber>17</StyledAchivNumber>

                        <StyledTextSide>
                            <StyledAchievHeading>Музеев</StyledAchievHeading>
                            <StyledAchivPargraf>обслужено</StyledAchivPargraf>
                        </StyledTextSide>
                    </StyledAchivCard>
            </AchieveNonSliderDiv>
            <AchieveSliderDiv>
                <AchieveSlider/>
            </AchieveSliderDiv>
            
        </AchievSection>
    )
}

export default AchievmentSection