import { memo, useMemo } from 'react'
import { getStarList } from '../../app/utils'
import styles from './Stars.module.css'


export const Stars = memo(({ quantity = 5, setReviewRating, reviewRating }) => {
    const starList = useMemo(() => getStarList(quantity), [quantity])

    return (
        <div className={styles.stars}>
            {starList.map((star) =>
                <span key={star}>
                    <input
                        className={styles.input}
                        id={`star-${star}`}
                        type='radio'
                        name='rating'
                        onChange={() => setReviewRating(star + '')}
                        value={star} />
                    <label
                        className={`${styles.label} ${star <= reviewRating && styles.check}`}
                        htmlFor={`star-${star}`}
                    >Rating {star}</label>
                </span>
            )}
        </div>
    )
})