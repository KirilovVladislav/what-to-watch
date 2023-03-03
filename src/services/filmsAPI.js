import {
    collection, orderBy, startAfter, query, where, limit,
    getDocs, doc, getDoc, getCountFromServer
} from 'firebase/firestore'
import { db } from '../firebase'


const filmsRef = collection(db, 'films')
const promoRef = collection(db, 'promo')
let lastVisible

export const fetchNextFilms = async ({ size = 8, excludeId = '', activeGenre }) => {
    const res = []

    const next = query(filmsRef,
        orderBy('id'),
        startAfter(lastVisible),
        limit(size))

    try {
        const calSnapshot = await getDocs(next)
        lastVisible = calSnapshot.docs.at(-1)

        calSnapshot.forEach((doc) => {
            res.push({ ...doc.data(), id: doc.id })
        })
    } catch (e) {
        console.error('Error seting document: ', e)
    }

    return res
}

export const fetchFilms = async ({ size = 8, excludeId = '', activeGenre }) => {
    const res = []

    const first = activeGenre
        ? query(filmsRef, orderBy('id'), where('id', '!=', excludeId), where('genre', '==', activeGenre), limit(size))
        : query(filmsRef, orderBy('id'), where('id', '!=', excludeId), limit(size))

    try {
        const calSnapshot = await getDocs(first)
        lastVisible = calSnapshot.docs.at(-1)

        calSnapshot.forEach((doc) => {
            res.push({ ...doc.data(), id: doc.id })
        })
    } catch (e) {
        console.error('Error seting document: ', e)
    }

    return res
}

export const getFilmsLength = async (excludeId, activeGenre = null) => {
    const queryRef = activeGenre
        ? query(filmsRef, where('id', '!=', excludeId), where('genre', '==', activeGenre))
        : query(filmsRef, where('id', '!=', excludeId))

    try {
        const snapshot = await getCountFromServer(queryRef)
        return snapshot.data().count
    } catch (e) {
        console.error('Error seting document: ', e)
    }
}

export const getPromo = async () => {
    const res = []

    try {
        const snapshot = await getDocs(promoRef)
        snapshot.forEach((doc) => res.push(doc.data()))
    } catch (e) {
        console.error('Error seting document: ', e)
    }

    return res
}

export const getFilmFromId = async (id) => {
    const docRef = doc(filmsRef, id)

    try {
        const docSnapshot = await getDoc(docRef)
        if (docSnapshot.exists()) {
            return docSnapshot.data()
        } else {
            console.log('No such document!')
        }
    } catch (e) {
        console.error('Error seting document: ', e)
    }
}

// export const getFilmsWithQuery = async (param, value) => {
//     const q = query(filmsRef, where(param, '==', value))
//     const res = {}
//     try {
//         const querySnapshot = await getDocs(q)
//         querySnapshot.forEach((doc) => res[doc.id] = { ...doc.data(), id: doc.id })
//     } catch (e) {
//         console.error('Error seting document: ', e)
//     }
//     return res
// }
