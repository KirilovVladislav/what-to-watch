import { memo, Suspense, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { useScrollToRef, usePromoFilm } from '../../hooks'


export const MainLayout = memo(() => {
    const headRef = useRef(null)
    
    useScrollToRef(headRef)
    usePromoFilm()

    return (
        <Suspense fallback={<Loader />} >
            <div ref={headRef} />
            <Outlet />
        </Suspense>
    )
})
