import { StyledTeamSection, TeamContainer, TeammateCard, TeammateImg, TeammateName, TeammateScope, StyledTeamSectionHeading } from './style'

import React from 'react'

const TeamSection = () => {
    return (
        <StyledTeamSection>
            <StyledTeamSectionHeading>Наша Команда</StyledTeamSectionHeading>
            <TeamContainer>
                <TeammateCard>
                    <TeammateImg type="Askar"></TeammateImg>
                    <TeammateName>Аскар Абый</TeammateName>
                    <TeammateScope>Вселенский мозг</TeammateScope>
                </TeammateCard>
                <TeammateCard>
                    <TeammateImg type="Timur"></TeammateImg>
                    <TeammateName>Тимур Абый</TeammateName>
                    <TeammateScope>Рыцарь Артур</TeammateScope>
                </TeammateCard>
                <TeammateCard>
                    <TeammateImg type="Marat"></TeammateImg>
                    <TeammateName>Марат Абый</TeammateName>
                    <TeammateScope>Философ-ученный</TeammateScope>
                </TeammateCard>
                <TeammateCard>
                    <TeammateImg type="Rustem"></TeammateImg>
                    <TeammateName>Рустем Абый</TeammateName>
                    <TeammateScope>Виртуоз</TeammateScope>
                </TeammateCard>
                <TeammateCard>
                    <TeammateImg type="Anton"></TeammateImg>
                    <TeammateName>Антон Малай</TeammateName>
                    <TeammateScope>Человек - шутка года</TeammateScope>
                </TeammateCard>
                <TeammateCard>
                    <TeammateImg type="Evelina"></TeammateImg>
                    <TeammateName>Эвелина Кыз</TeammateName>
                    <TeammateScope>World Beauty Сs</TeammateScope>
                </TeammateCard>
            </TeamContainer>
        </StyledTeamSection>
    )
}

export default TeamSection