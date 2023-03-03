import styles from './Rating.module.css'


export const Rating = ({ score, count, level }) => {
    return (
        <div className={styles.rating}>
            <div className={styles.score}>{score}</div>
            <p className={styles.meta}>
                <span className={styles.level}>{level}</span>
                <span className={styles.count}>{count} ratings</span>
            </p>
        </div>
    )
}