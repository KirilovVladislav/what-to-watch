export const routes = {
    Main: '/',
    SignIn: '/login',
    MyList: '/mylist',
    Film: '/films/:id',
    Review: '/films/:id/review',
    Player: '/player/:id',
    Error: '*',
}

export const authorizationStatus = {
    AUTH: 'AUTH',
    NO_AUTH: 'NO_AUTH',
    UNKNOWN: 'UNKNOWN',
}

export const genres = [
	'All genres', 'Comedie', 'Crime',
	'Documentary', 'Drama', 'Horror',
	'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller',
]

export const filmNavLinks = ['Overview', 'Details', 'Reviews']
