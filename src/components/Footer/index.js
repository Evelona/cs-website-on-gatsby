import { StyledFooter, StyledLogo, StyledYear } from './style'

import React from 'react'
import logo from '../../images/logo.svg'

export const Footer = () => {
    return(
        <StyledFooter>
            <StyledLogo src={logo} alt="Complete Solution logo" />
            <StyledYear>© 2019</StyledYear>
        </StyledFooter>
    )
}

export default Footer