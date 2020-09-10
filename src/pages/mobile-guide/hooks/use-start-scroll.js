import { useEffect } from 'react'

const scrollToStartSection = () => {
    let startHash = window.location.hash

    if ( !startHash || !document.getElementById(startHash.slice(1)) ) {
        startHash = '#main-section'
        window.history.pushState("", document.title, window.location.pathname + startHash);
    }

    let startSection = document.getElementById(startHash.slice(1))
    const top = startSection.getBoundingClientRect().top

    window.scrollTo({ top, left: 0 })
}

export const useStartScroll = () => {
    useEffect(() => {
       scrollToStartSection()
    }, [])

}