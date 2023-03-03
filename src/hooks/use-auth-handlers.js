import { useMemo } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
} from 'firebase/auth'
import { auth, provider } from '../firebase'
import { addUser } from '../services/usersAPI'


export const useAuthHandlers = () => {

    const authHandlers = useMemo(() => ({
        loginEmailPassword: async (email, password) => {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            return user
        },
        createUserEmailPassword: async (email, password) => {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            user && addUser({
                displayName: user.displayName || user.email,
                email: user.email,
                // metadata: user.metadata,
                photoURL: user.photoURL,
                id: user.uid,
                myList: [],
            })
            return user
        },
        signInWithGoogle: async () => {
            const { user } = await signInWithPopup(auth, provider)
            return user
        },
        logout: async () => {
            await signOut(auth)
        }
    }))
    return authHandlers
}