import {
	CardHeader,
	CardInfo,
	Catalog,
	FilmCard,
	Footer,
	Content,
	Header,
	FilmDesc,
} from '../../widgets'
import { UserBlock } from '../../components'
import { useSelector } from 'react-redux'


const Film = () => {
	const {promoFilm: film, promoId} = useSelector((state) => state.user)

	return film.title && (
		<>
			<FilmCard >
				<CardHeader
					title={film.title}
					imgHref={film.titleHref}
					minHeight >
					<Header >
						<UserBlock />
					</Header>
					<CardInfo film={film} />
				</CardHeader>
				<FilmDesc film={film} />
			</FilmCard>
			<Content>
				<Catalog
					genre={film.genre}
					size={4}
					title={'More like this'}
					idPromoFilm={promoId} />
				<Footer />
			</Content>
		</>
	)
}

export default Film
