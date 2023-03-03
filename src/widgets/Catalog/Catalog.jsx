import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { genres } from '../../app/const'
import { FilmCardSmall, GenresNav } from '../../components'
import { BtnBorder } from '../../ui'
import styles from './Catalog.module.css'
import { fetchFilms, fetchNextFilms, getFilmsLength } from '../../services/filmsAPI'


export const Catalog = memo(({ genre = 'All genres', size = 4, title = 'Catalog', hiddenTitle, genresNav, idPromoFilm, myList, handleToggleMyList, showMore }) => {
	const [activeGenre, setActiveGenre] = useState(genre)
	const [films, setFilms] = useState([])
	const [totalCount, setTotalCount] = useState(0)
	
	let paramsFetchAllFilms = useMemo(() => ({
		size: size,
		excludeId: idPromoFilm,
		activeGenre: activeGenre !== 'All genres' ? activeGenre : undefined,
	}), [size, idPromoFilm, activeGenre])
	
	useEffect(() => {setActiveGenre(genre)}, [genre])
	
	useEffect(() => {
		if (!myList) {
			getFilmsLength(idPromoFilm, paramsFetchAllFilms.activeGenre)
				.then((data) => setTotalCount(data))
			fetchFilms(paramsFetchAllFilms)
				.then((data) => setFilms(data))
		} else {
			setFilms(myList)
		}
	}, [paramsFetchAllFilms, myList])

	const toNextPage = useCallback(() => {
		fetchNextFilms({ size: size })
			.then((data) => setFilms((prev) => [...prev, ...data]))
	}, [])

	const deleteItem = useCallback((film) => {
		handleToggleMyList(film)
	}, [])

	return (
		<section className={`${styles.catalog} ${!hiddenTitle && styles.catalogLikeThis}`}>
			{genresNav &&
				<GenresNav genres={genres} setActiveGenre={setActiveGenre} activeGenre={activeGenre} />
			}
			<h2 className={`${styles.title} ${hiddenTitle && 'visually-hidden'}`}>{title}</h2>

			<div className={styles.filmsList}>
				{!films?.length && <span className={styles.title} >The list is empty</span>}
				{films?.map((film) => <FilmCardSmall
					deleteBtn={!!myList}
					handleClick={() => deleteItem(film)}
					classNameProps={styles.filmsCard}
					id={film.id}
					title={film.title}
					key={film.id} />)}
			</div>
			{showMore && films.length < totalCount &&
				<BtnBorder title={'Show more'} handleClick={toNextPage} />
			}
		</section >
	)
})
