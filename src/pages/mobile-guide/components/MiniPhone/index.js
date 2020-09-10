import React from 'react'
import { StyledMiniPhone, StyledScreenMiniPhone } from './style'

const MiniPhone = ({ current, linkHash }) => {
    return (
        <StyledMiniPhone>
            <StyledScreenMiniPhone currentSection={current} linkHash={linkHash}/>
        </StyledMiniPhone>
    )
}

export default MiniPhone