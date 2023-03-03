import { ReviewItem } from '../Review-item/Review-item'
import styles from './Reviews.module.css'


export const Reviews = ({ reviews }) => {
    return (
        <>
            <div className={styles.reviewsCol}>
                {reviews.map((review, i, arr) =>
                    i < arr.length / 2 &&
                    <ReviewItem review={review} key={i} />
                )}
            </div>
            <div className={styles.reviewsCol}>
                {reviews.map((review, i, arr) =>
                    i >= arr.length / 2 &&
                    <ReviewItem review={review} key={i} />
                )}
            </div>
        </>
    )
}