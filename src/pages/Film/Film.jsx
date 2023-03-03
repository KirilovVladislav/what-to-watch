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
import { usePromoFilm } from '../../hooks'
import { UserBlock } from '../../components'


const Film = () => {
	const [promoId, film] = usePromoFilm()

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
