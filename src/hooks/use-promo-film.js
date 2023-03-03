import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHrefFromTitle } from '../app/utils'
import { getFilmFromId, getPromo } from '../services/filmsAPI'


export const usePromoFilm = () => {
    const { id: paramsFilmId } = useParams()
    const [promoId, setPromoId] = useState('')
    const [promoFilm, setPromoFilm] = useState('')

    useEffect(() => {
        !paramsFilmId && getPromo().then((data) => setPromoId(data[0].id))
    }, [])

    useEffect(() => {
        (promoId || paramsFilmId) && getFilmFromId(promoId || paramsFilmId).then((data) => setPromoFilm(data))
    }, [promoId, paramsFilmId])

    const memoizedFilm = useMemo(() => ({
        ...promoFilm,
        titleHref: getHrefFromTitle(promoFilm?.title)
    }), [promoFilm?.title])

    return [promoId || paramsFilmId, memoizedFilm]
}
