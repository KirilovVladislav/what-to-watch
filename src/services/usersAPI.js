import { doc, setDoc, getDoc, updateDoc, collection } from 'firebase/firestore'
import { db, auth } from "../firebase"


const usersRef = collection(db, 'users')

export const addUser = async (user) => {
    const docRef = doc(usersRef, user.id)
    try {
        await setDoc(docRef, user, { merge: true })
    } catch (e) {
        console.error("Error seting document: ", e);
    }
}

export const fetchUser = async () => {
    const userRef = doc(usersRef, auth.currentUser.uid)
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
        return userSnap.data()
    } else {
        console.log("No such document!");
    }
}

export const fetchUserMyList = async () => {
    const userRef = doc(usersRef, auth?.currentUser?.uid)
    const userSnap = await getDoc(userRef)
    const myList = await userSnap.data().myList

    const filmsSnap = await Promise.all(myList.map((filmId) => getDoc(doc(db, 'films', filmId))))
    return filmsSnap.map(evt => evt.data())
}

export const addMyListItem = async (filmId) => {
    const userRef = doc(usersRef, auth.currentUser.uid)
    const userSnap = await getDoc(userRef)
    const myList = await userSnap.data().myList
    await updateDoc(userRef, {
        myList: [...myList, filmId]
    })
}

export const deleteMyListItem = async (filmId) => {
    const userRef = doc(usersRef, auth.currentUser.uid)
    const userSnap = await getDoc(userRef)
    const myList = await userSnap.data().myList
    await updateDoc(userRef, {
        myList: myList.filter((id) => id != filmId)
    })
}
