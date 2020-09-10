import { ContactHeader, ContactNumbersDiv, ContactSection,
         ContactsContent, ContactsEmail, ContactsEmailsDiv,
         ContactsNumber, ContactsSocialMedia, ContactsSocialMediaDiv
        } from './style'

import React from 'react'
import contactsIcon from '../../images/features-icon.png'

const ContactsSection = () => {
    return(
        <ContactSection>
            <ContactHeader>Контакты</ContactHeader>
            <ContactsContent>
                <ContactNumbersDiv>
                    <ContactsNumber href="tel:+7(919) 120 12 12">+7(919) 120 12 12</ContactsNumber>
                    <ContactsNumber href="tel:+7(919) 120 12 12">+7(919) 120 12 12</ContactsNumber>
                </ContactNumbersDiv>

                <ContactsEmailsDiv>
                    <ContactsEmail href="mailto:dedPihto@mail.ru">dedPihto@mail.ru</ContactsEmail>
                    <ContactsSocialMediaDiv>
                        <ContactsSocialMedia><img src={contactsIcon} alt="Social media logo"/></ContactsSocialMedia>
                        <ContactsSocialMedia><img src={contactsIcon} alt="Social media logo"/></ContactsSocialMedia>
                        <ContactsSocialMedia><img src={contactsIcon} alt="Social media logo"/></ContactsSocialMedia>
                    </ContactsSocialMediaDiv>
                </ContactsEmailsDiv>
            </ContactsContent>
        </ContactSection>
    )
}

export default ContactsSection