import { useState, useEffect } from 'react'

export const useChangeHashOnScroll = () => {
    let startHash = window.location.hash
    if(!startHash || !document.getElementById(startHash.slice(1))) startHash = '#main-section'

    const [linkHash, setHash] = useState(startHash)
    const [linkIndex, setlinkIndex] = useState(0)
    const viewPartWindowHeight = window.innerHeight / 2.3
    const maxHeightBetweenHeaders = window.innerHeight * 1.3

    const updateHash = () => {

        let minDifference = maxHeightBetweenHeaders
        let minIndex = 0
        let prevIndex
        const headingArr = document.getElementsByClassName('mobile-guide-heading')

        for (let i = 0; i < headingArr.length; i++) {
            const currDifference = viewPartWindowHeight - headingArr[i].getBoundingClientRect().top

            if (currDifference > 0 && minDifference > currDifference && minIndex !== i) {
                prevIndex = minIndex
                minIndex = i
                minDifference = currDifference
            }
        }

        if (minIndex !== prevIndex) {
            setHash(headingArr[minIndex].id)
            setlinkIndex(minIndex)
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', updateHash)
        return () => window.removeEventListener('scroll', updateHash)
    }, [])

    useEffect(() => {
        window.history.pushState('', '', linkHash)
    }, [linkHash])

    return [linkHash, linkIndex]
}
