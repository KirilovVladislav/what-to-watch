import {
    collection, query, where, limit, getDocs, doc, setDoc
} from 'firebase/firestore'
import { db } from "../firebase"


const reviewsRef = collection(db, 'reviews')

export const addReview = async (review) => {
    const docRef = doc(reviewsRef)
    try {
        await setDoc(docRef, { ...review, id: docRef.id })
    } catch (e) {
        console.error("Error seting document: ", e);
    }
}

export const getReviewsForFilm = async (filmId, size = 8) => {
    const q = query(reviewsRef, where('filmId', "==", filmId), limit(size))
    const res = []
    try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => res.push({ ...doc.data(), id: doc.id }))
    } catch (e) {
        console.error("Error seting document: ", e);
    }
    return res
}
