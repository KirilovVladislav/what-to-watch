import {
	CardHeader,
	CardInfo,
	Catalog,
	FilmCard,
	Footer,
	Content,
	Header,
} from '../../widgets'
import { UserBlock } from '../../components'
import { useSelector } from 'react-redux'


const Main = () => {
	const {promoFilm: film, promoId} = useSelector((state) => state.user)

	return promoId && (
		<>
			<FilmCard >
				<CardHeader
					title={film.title}
					imgHref={film.titleHref} >
					<Header >
						<UserBlock />
					</Header>
					<CardInfo film={film} />
				</CardHeader>
			</FilmCard>
			<Content>
				<Catalog
					showMore
					size={8}
					title={'Catalog'}
					hiddenTitle
					genresNav
					idPromoFilm={promoId} />
				<Footer />
			</Content>
		</>
	)
}

export default Main
