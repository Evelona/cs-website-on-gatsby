import { StyledTerminalHeading, StyledTerminalParagraf, StyledTerminalSection, Terminal, TerminalLeg, TerminalScreen } from './style'

import React from 'react'
import TerminalScreenSlider from './TerminalScreenSlider'

const TerminalSection = () => {
    return (
        <StyledTerminalSection>
            <StyledTerminalHeading>Электронная экспозиция</StyledTerminalHeading>
            <StyledTerminalParagraf>Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.</StyledTerminalParagraf>
            <StyledTerminalParagraf>Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.</StyledTerminalParagraf>
            <Terminal>
                <TerminalScreen>
                    <TerminalScreenSlider/>
                </TerminalScreen>
                <TerminalLeg/>
            </Terminal>
        </StyledTerminalSection>
    )
}

export default TerminalSection