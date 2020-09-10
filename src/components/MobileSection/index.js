import { MobileBody, MobileCamera, MobileDiv, MobileScreen, StyledMobileHeading, StyledMobileParagraf, StyledMobileSection } from './style'
import React, { useEffect, useState }from 'react'

import SimpleSlider from './MobileScreenSlider'
import phoneCamera from '@images/phone-camera.png'

const MobileSection = () => {
    const [afterChangeCurrentSlide, setAfterChangeCurrentSlide] = useState(0)
    const arrElement = typeof document !== `undefined`? document.getElementsByClassName('mobileBody') : {}
    const handleScroll = (event) => {
        if(window.innerWidth > 992) {
            const mobile = arrElement['0']
            mobile.style.transform = `translate(-100%, ${event.srcElement.documentElement.scrollTop * (-1) *(0.02) + 20}vh)`
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <StyledMobileSection>
            <MobileDiv>
                <MobileBody className='mobileBody'>
                    <MobileCamera src={phoneCamera}/>
                    <MobileScreen>
                        <SimpleSlider className='mobileBody' setAfterChangeCurrentSlide={setAfterChangeCurrentSlide}/>
                    </MobileScreen>
                </MobileBody>
            </MobileDiv>

            <StyledMobileHeading part={0} current={afterChangeCurrentSlide}>Мобильный гид</StyledMobileHeading>
            <StyledMobileParagraf part={0} current={afterChangeCurrentSlide}>1Мобильная экспозиция, Мобильный гид Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.</StyledMobileParagraf>

            <StyledMobileHeading part={1} current={afterChangeCurrentSlide}>Мобильный гид 2</StyledMobileHeading>
            <StyledMobileParagraf part={1} current={afterChangeCurrentSlide}>2Мобильная экспозиция, Мобильный гид Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.</StyledMobileParagraf>


            <StyledMobileHeading part={2} current={afterChangeCurrentSlide}>Мобильный гид 3</StyledMobileHeading>
            <StyledMobileParagraf part={2} current={afterChangeCurrentSlide}>3Мобильная экспозиция, Мобильный гид Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.</StyledMobileParagraf>

        </StyledMobileSection>
    )
}

export default MobileSection