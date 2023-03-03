import { createSlice } from '@reduxjs/toolkit'
import { authorizationStatus } from '../../app/const'


const initialState = {
    authStatus: authorizationStatus.UNKNOWN,
    email: '',
    token: '',
    id: '',
    name: '',
    myList: [],
    filmsFromMyList: [],
    promoFilm: {},
    promoId: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.authStatus = action.payload.authStatus
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.name = action.payload.name
            state.myList = action.payload.myList
        },
        removeUser: (state) => {
            state.authStatus = authorizationStatus.NO_AUTH
            state.email = ''
            state.token = ''
            state.id = ''
            state.name = ''
            state.myList = []
        },
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload
        },
        setFilmsFromMyList: (state, action) => {
            state.filmsFromMyList = action.payload
        },
        setMyList: (state, action) => {
            state.myList = action.payload
        },
        addMyList: (state, action) => {
            state.myList.push(action.payload.id)
            state.filmsFromMyList.push(action.payload)
        },
        deleteMyList: (state, action) => {
            state.myList = state.myList.filter((film) => film != action.payload.id)
            state.filmsFromMyList = state.filmsFromMyList.filter((film) => film.id != action.payload.id)
        },
        setPromoFilm: (state, action) => {
            state.promoFilm = action.payload
            state.promoId = action.payload.id
        }
    }
})

export const {
    setUser,
    removeUser,
    setAuthStatus,
    setFilmsFromMyList,
    setMyList,
    addMyList,
    deleteMyList,
    setPromoFilm
} = userSlice.actions

export default userSlice.reducer