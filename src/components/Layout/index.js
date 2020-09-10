import Footer from '../Footer'
import Header from '../Header'
import { Helmet } from "react-helmet";
import LocationProvider from './location-context'
import React from 'react'
import { StaticQuery } from 'gatsby'

const Layout = ({ children, location }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  
  return (
    <StaticQuery
      query = {
        graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                  title
                  menuLinks {
                    name
                    link
                  }
              }
            }
          }
        `
      }
      render={
        data => (
          <LocationProvider value={location}>
            <Helmet
              title={'Complete Solution'}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            ></Helmet>
            <Header menuLinks={data.site.siteMetadata.menuLinks} location={location} />
            <main>
              {children}
            </main>
            <Footer/>
          </LocationProvider>
        )
      }
    />
  )
}
    
export default Layout
export { useLocation } from './location-context'