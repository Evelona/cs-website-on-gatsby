import React from 'react'
import { sectionsArray } from './sections-array'
import MiniPhone from '../MiniPhone'
import { useMediaQuery } from 'react-responsive'
import { StyledSection, SectionContainer, MobileGuideHeading, SectionContent, DarkDiv, MobileGuideParagraf} from '../style'


const PageMenuItem = ({ data : { id, title, text} }) => {
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 991px)'
    })

    return(
        <StyledSection id={id}>
            <SectionContainer>
                <MobileGuideHeading className='mobile-guide-heading' id={`#${id}`}>{title}</MobileGuideHeading>
                <SectionContent>
                    {isTabletOrMobile &&<MiniPhone current={`#${id}`}/>}
                    <DarkDiv>
                        <MobileGuideParagraf>{text}</MobileGuideParagraf>
                    </DarkDiv>
                </SectionContent>
            </SectionContainer>
        </StyledSection>
    )
}

const PageMenu = () => {
    return(
        <>
            {sectionsArray.map(
            sectionData => (
                <PageMenuItem
                    data = {sectionData}
                />
            ))}
        </>
    )
}

export default PageMenu