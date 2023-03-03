import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getHrefFromTitle } from '../app/utils'
import { getFilmFromId, getPromo } from '../services/filmsAPI'
import { setPromoFilm as dispatchPromoFilm } from '../store/slices/user-slice'


export const usePromoFilm = () => {
    const { id: paramsFilmId } = useParams()
    const [promoId, setPromoId] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        !paramsFilmId && getPromo().then((data) => setPromoId(data[0].id))
        paramsFilmId && setPromoId(paramsFilmId)
    }, [paramsFilmId])

    useEffect(() => {
        (promoId) && getFilmFromId(promoId).then((data) => {
            dispatch(dispatchPromoFilm({
                ...data, 
                titleHref: getHrefFromTitle(data?.title)
            }))
        })
    }, [promoId])
}
