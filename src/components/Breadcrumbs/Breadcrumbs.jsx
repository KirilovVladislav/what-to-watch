import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'


export const Breadcrumbs = ({ filmId, filmTitle }) => {
    return (
        <nav className={styles.breadcrumbs}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to={`/films/${filmId}`} className={styles.link}>{filmTitle}</Link>
                </li>
                <li className={styles.item}>
                    <span className={styles.link}>Add review</span>
                </li>
            </ul>
        </nav>
    )
}