import styles from './Overview.module.css'


export const Overview = ({ film }) => {
    return (
        <>
            <p>{film.lead}</p>
            <p>{film.desc}</p>
            <p className={styles.director}><strong>Director: {film.director}</strong></p>
            <p className={styles.starring}><strong>Starring: {film.starring.slice(0, 3).join(', ')} and other</strong></p>
        </>
    )
}