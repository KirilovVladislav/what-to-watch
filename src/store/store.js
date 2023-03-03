import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
// import { logIt } from '../app/middleware'
// import { filmsAPI } from '../services/filmsAPI'
// import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        user: userReducer,
        // [filmsAPI.reducerPath]: filmsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware()
            .concat([
                // logIt,
                // filmsAPI.middleware
            ])
    )
})

// setupListeners(store.dispatch)
