import { memo } from 'react'
import { Link } from 'react-router-dom'
import { getHrefFromTitle } from '../../app/utils'
import styles from './Film-card-small.module.css'


export const FilmCardSmall = memo(({ id, title, classNameProps, handleClick, deleteBtn }) => {
	const nameHref = getHrefFromTitle(title)

	return (
		<article className={`${styles.card} ${classNameProps}`}>
			{deleteBtn &&
				<button
					onClick={() => handleClick(id)}
					className={styles.btn}
				>
					<svg viewBox="0 0 19 19" width="19" height="19">
						<use xlinkHref={`img/icons/add.svg#add`}></use>
					</svg>
				</button>
			}
			<Link className={styles.link} to={`/films/${id}`} >
				<div className={`${styles.image}`}>
					<img src={`img/backgrounds/${nameHref}.jpg`} alt={title} width="280" height="175" />
				</div>
				<h3 className={styles.title}>
					{title}
				</h3>
			</Link>
		</article>
	)
})
