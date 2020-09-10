import React from 'react'
import PhoneScreen from './PhoneScreen/index'
import { StyledPhone } from './style'

const Phone = ({ sectionIndex }) => {
    return (
        <StyledPhone>
            <PhoneScreen screenIndex={sectionIndex}/>
        </StyledPhone>
    )
}

export default Phone
