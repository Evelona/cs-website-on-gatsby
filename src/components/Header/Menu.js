import { Menunav, SelectingLine, StyledLink, StyledMenu, StyledMenuItem } from './style'

import React from 'react'
import { useLocation } from '../Layout'

const MenuItem = ({ link }) => {
  const location = useLocation()
  const selected = location.pathname === link.link

  return (
    <StyledMenuItem key={link.name} selected={selected}>
        <StyledLink to={link.link}>
            {link.name}
        </StyledLink>
        <SelectingLine >
          <svg viewBox="0 0 100% 1" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-dasharray="1 5" stroke-dashoffset="0"/>
          </svg>
        </SelectingLine>
    </StyledMenuItem>
  )
}

const Menu = ({menuLinks}) => {

    return(
      <Menunav>
        <StyledMenu>
          {menuLinks.map(link => (<MenuItem link={link} />))}
        </StyledMenu>
        {/* <span></span> */}
      </Menunav>
    )
}

export default Menu
