import { useParams } from 'react-router-dom'
import styles from './Film-card.module.css'


export const FilmCard = ({ children }) => {
	const { id } = useParams()

	return (
		<section className={`${styles.card} ${id && styles.full}`}>
			{children}
		</section>
	)
}
