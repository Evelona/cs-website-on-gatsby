import Layout from '@components/Layout'
import Phone from './components/Phone'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PageMenu from './components/PageMenu'
import SectionMenu from './components/SectionMenu'
import { useChangeHashOnScroll } from './hooks/use-change-hash-on-scroll'
import { useStartScroll } from './hooks/use-start-scroll'

const MobileGuidePage = ({ location }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 991px)'
      })

    const [linkHash, index] = useChangeHashOnScroll()
    useStartScroll()

    return(
        <Layout location={location}>
             {isDesktopOrLaptop && <Phone sectionIndex={index} />}
            <PageMenu />
            <SectionMenu location={location} linkHash={linkHash}/>
        </Layout>
    )
}

export default MobileGuidePage