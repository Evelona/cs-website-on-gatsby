import React from 'react'
import { StyledSectionMenu, StyledLink, Icon } from './style'
import { linksArray } from './links-array'

const LinkListItem = ({ linkData, pathname, linkHash }) => {
    const id = linkData.id
    const text = linkData.text
    return(
        <StyledLink to={`${pathname}/#${id}`}>
            <Icon section={`#${id}`} current={linkHash}/>
            {text}
        </StyledLink>
    )

}

const SectionMenu = ({location, linkHash}) => {
    return (
        <StyledSectionMenu>
            {linksArray.map(
                (link, index) => (
                    <LinkListItem
                        linkData={link}
                        pathname={location.pathname}
                        linkHash={linkHash}
                        index={index}
                    />
                )
            )}
        </StyledSectionMenu>
    )
}

export default SectionMenu