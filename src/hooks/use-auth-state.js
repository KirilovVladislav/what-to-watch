import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { authorizationStatus } from '../app/const'
// import { useLocalStorage } from './use-local-storage'
import { setUser } from '../store/slices/user-slice'
import { auth } from '../firebase'
import { fetchUser } from '../services/usersAPI'


export const useAuthState = () => {
    const dispatch = useDispatch()

    const { id, authStatus } = useSelector((state) => state.user)
    // const authInfo = useSelector((state) => state.user)
    // const [userStorage, setUserStorage] = useLocalStorage('user', authInfo)

    const getUserInfo = useCallback(async (user) => {
        const res = await user?.uid && fetchUser(user?.uid)
        const data = await res

        const newAuthUserInfo = {
            authStatus: user !== null ? authorizationStatus.AUTH : authorizationStatus.NO_AUTH,
            email: user?.email || '',
            token: user?.accessToken || '',
            id: user?.uid || '',
            name: user?.displayName || user?.email || '',
            // myList: userInfo?.myList || [],
            myList: data?.myList || [],
        }

        dispatch(setUser(newAuthUserInfo))
        // setUserStorage(newAuthUserInfo)
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            getUserInfo(user)
        })

        return () => unsubscribe()
    }, [])

    return { userId: id, isLoading: authStatus === authorizationStatus.UNKNOWN }
}
