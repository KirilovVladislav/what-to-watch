import styles from './Details.module.css'


export const Details = ({ film }) => {
    return (
        <>
            <div className={styles.textCol}>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Director</strong>
                    <span className={styles.detailsValue}>{film.director}</span>
                </p>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Starring</strong>
                    <span className={styles.detailsValue}>
                        {film.starring.map((item) => <span key={item}>{item} <br /></span>)}
                    </span>
                </p>
            </div>

            <div className={styles.textCol}>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Run Time</strong>
                    <span className={styles.detailsValue}>{`${Math.floor(film.runTime / 60)}h ${film.runTime - 60 * Math.floor(film.runTime / 60)}m`}</span>
                </p>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Genre</strong>
                    <span className={styles.detailsValue}>{film.genre}</span>
                </p>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Released</strong>
                    <span className={styles.detailsValue}>{film.year}</span>
                </p>
            </div>
        </>
    )
}