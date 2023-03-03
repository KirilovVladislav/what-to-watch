import { lazy } from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { routes } from './app/const'
import { useAuthState } from './hooks'
import { MainLayout } from './layouts/Main-layout/Main-layout'
import { UserPageLayout } from './layouts/User-page-layout/User-page-layout'

const Main = lazy(() => import('./pages/Main/Main'))
const Film = lazy(() => import('./pages/Film/Film'))
const SignIn = lazy(() => import('./pages/Sign-in/Sign-in'))
const MyList = lazy(() => import('./pages/My-list/My-list'))
const Review = lazy(() => import('./pages/Review/Review'))
const ErrorPage = lazy(() => import('./pages/Error-page/Error-page'))
const Player = lazy(() => import('./pages/Player/Player'))


export const App = () => {
    const { userId, isLoading } = useAuthState()

    const router = createBrowserRouter([
        {
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    element: <Main />,
                    path: routes.Main,
                },
                {
                    element: <Film />,
                    path: routes.Film,
                },
                {
                    element: <Player />,
                    path: routes.Player,
                },
                {
                    element: <UserPageLayout />,
                    children: [
                        {
                            element: !userId
                                ? <SignIn />
                                : <Navigate to={routes.Main} replace />,
                            path: routes.SignIn,
                        },
                        {
                            element: userId
                                ? <MyList />
                                : <Navigate to={routes.SignIn} replace />,
                            path: routes.MyList,
                        },
                    ]
                },
                {
                    element: userId
                        ? <Review />
                        : <Navigate to={routes.SignIn} replace />,
                    path: routes.Review,
                },
            ],
        }
    ])

    return !isLoading && (
        <RouterProvider router={router} />
    )
}
