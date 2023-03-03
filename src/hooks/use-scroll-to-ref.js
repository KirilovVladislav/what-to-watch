import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToRef = (ref, dependency) => {
    const { pathname } = useLocation()

    useEffect(() => {
        ref?.current?.scrollIntoView()
        // return () => window.scrollTo(0, 0)
    }, [dependency || pathname])
}
