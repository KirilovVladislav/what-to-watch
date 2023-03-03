import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Stars } from '../../components'
import { addReview } from '../../services/reviewsAPI'
import styles from './Form-review.module.css'


export const FormReview = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { name, email } = useSelector((state) => state.user)

    const [reviewRating, setReviewRating] = useState(null)
    const [reviewText, setReviewText] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const newDate = new Date()

        addReview({
            filmId: id,
            rating: reviewRating,
            text: reviewText,
            author: name,
            authorEmail: email,
            datetime: newDate.toISOString().slice(0, 10),
            date: newDate.toLocaleString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        })
        setReviewRating(null)
        setReviewText('')
        navigate(-1)
    }

    const handleChangeText = (evt) => {
        setReviewText(evt.target.value)
    }

    return (
        <div className={styles.review}>
            <form onSubmit={handleSubmit}>
                <Stars quantity={10} reviewRating={reviewRating} setReviewRating={setReviewRating} />
                <div className={styles.text}>
                    <textarea value={reviewText} onChange={handleChangeText} className={styles.textarea} name='review-text' id='review-text' placeholder='Review text'></textarea>
                    <div className={styles.submit}>
                        <button className={styles.btn} type='submit'>Post</button>
                    </div>

                </div>
            </form>
        </div>
    )
}