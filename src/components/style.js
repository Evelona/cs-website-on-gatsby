// import styled from 'styled-components'

//VARIABLES
export const TEXT_COLOR = '#C7C5C3'
export const LIGHT_BG = '#C4C4C4'
//

const size = {
    mobileS: '320px',
    mobile: '576px',
    tablet: '768px',
    laptopS: '992px',
    laptop: '1200px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
}

// @media ${device.}{}

