import { memo } from 'react'
import styles from './Genres-nav.module.css'


export const GenresNav = memo(({ genres, activeGenre, setActiveGenre }) => {
    return (
        <ul className={styles.list}>
            {genres.map((genre) =>
                <li
                    className={`${styles.item} ${activeGenre === genre && styles.active}`}
                    onClick={() => setActiveGenre(genre)}
                    key={genre}>
                    <div className={styles.link} >{genre}</div>
                </li>
            )}
        </ul>
    )
})