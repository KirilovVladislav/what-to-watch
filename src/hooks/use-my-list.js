import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserMyList, addMyListItem, deleteMyListItem } from '../services/usersAPI'
import { addMyList, deleteMyList, setFilmsFromMyList } from '../store/slices/user-slice'


export const useMyList = () => {
    const dispatch = useDispatch()
    const { myList, id: userId } = useSelector((state) => state.user)

    useEffect(() => {
        userId && fetchUserMyList().then((data) => dispatch(setFilmsFromMyList(data)))
    }, [])

    const handleClick = useCallback((film) => {
        if (!userId) return

        const isInList = myList?.includes(film.id)

        if (isInList) {
            deleteMyListItem(film.id)
            dispatch(deleteMyList(film))
        } else {
            addMyListItem(film.id)
            dispatch(addMyList(film))
        }
    }, [userId, myList])

    return [handleClick]
}
