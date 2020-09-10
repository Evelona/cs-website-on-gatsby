import { LogoWrapper, StyledHeader, StyledLogo } from './style'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'
import React from 'react'
import logo from '../../images/logo.svg'

const Header = ({ menuLinks, location }) => {
    return (
        <StyledHeader>
            <LogoWrapper>
                <StyledLogo src={logo} alt="Complete Solution logo"/>
            </LogoWrapper>
            <BurgerMenu/>
            <Menu menuLinks={menuLinks} location={location} />
        </StyledHeader>
    )
}

export default Header
