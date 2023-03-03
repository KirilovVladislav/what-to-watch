import styles from './Review-item.module.css'


export const ReviewItem = ({ review }) => {
    return (
        <div
            className={styles.review}
        >
            <blockquote className={styles.reviewQuote}>
                <p className={styles.reviewText}>{review.text}</p>

                <footer className={styles.reviewDetails}>
                    <cite className={styles.reviewAuthor}>{review.author}</cite>
                    <time className={styles.reviewDate} dateTime={review.datetime}>{review.date}</time>
                </footer>
            </blockquote>

            <div className={styles.reviewRating}>{review.rating}</div>
        </div>
    )
}