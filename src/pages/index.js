import '@components/style.styl'
import Layout from '@components/Layout'
import React from 'react'

import AchievmentSection from '@components/AchievmentSection'
import ClientsSection from '@components/ClientsSection'
import ContactsSection from '@components/Contacts'
import MobileSection from '@components/MobileSection'
import TeamSection from '@components/TeamSection'
import TerminalSection from '@components/TerminalSection'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <MobileSection/>
    <AchievmentSection/>
    <TerminalSection/>
    <ClientsSection/>
    <TeamSection/>
    <ContactsSection/>
  </Layout>
)

export default IndexPage

