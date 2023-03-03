import styles from './Card-header.module.css'


export const CardHeader = ({ minHeight, positionRelative, title, imgHref, children }) => {
    return (
        <div className={`${positionRelative && styles.positionRelative} ${minHeight && styles.minHeight}`}>
            <div className={styles.bg}>
                <img src={`img/backgrounds/${imgHref}.jpg`} alt={title} />
            </div>
            {children}
        </div>
    )
}
