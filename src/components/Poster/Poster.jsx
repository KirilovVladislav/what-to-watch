import styles from './Poster.module.css'


export const Poster = ({posterBig, posterSmall, title, imgHref}) => {
    return (
        <div className={`${styles.poster} ${posterBig && styles.posterBig} ${posterSmall && styles.posterSmall}`}>
            <img
                src={`img/posters/${imgHref}.jpg`}
                alt={title}
                width="218" height="327"
            />
        </div>
    )
}
