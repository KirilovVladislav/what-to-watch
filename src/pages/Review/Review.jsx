import { Header, FilmCard, CardHeader, FormReview } from '../../widgets'
import { Breadcrumbs, Poster, UserBlock } from '../../components'
import { usePromoFilm } from '../../hooks'


const Review = () => {
	const [id, film] = usePromoFilm()

	return film && (
		<>
			<FilmCard >
				<CardHeader
					title={film.title}
					imgHref={film.titleHref}
					positionRelative >
					<Header >
						<Breadcrumbs filmId={id} filmTitle={film.title} />
						<UserBlock />
					</Header>
					<Poster 
						title={film.title} 
						imgHref={film.titleHref} 
						posterSmall />
				</CardHeader>
				<FormReview />
			</FilmCard>
		</>
	)
}

export default Review
