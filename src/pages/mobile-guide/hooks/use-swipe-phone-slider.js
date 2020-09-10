import { useEffect, useRef } from 'react'

export const useSwipePhoneSlider = (index) => {
    const slider = useRef(null)

    useEffect(() => {
        slider.current.slickGoTo(index)
    }, [index])

    return slider
}
