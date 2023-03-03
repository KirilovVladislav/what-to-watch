import { memo, useEffect, useState } from 'react'
import { filmNavLinks } from '../../app/const'
import { getRatingLevel } from '../../app/utils'
import { Details, FilmNav, Overview, Rating, Reviews, Poster } from '../../components'
import { getReviewsForFilm } from '../../services/reviewsAPI'
import styles from './Film-desc.module.css'


export const FilmDesc = memo(({ film }) => {
    const [activeNavItem, setActiveNavItem] = useState(filmNavLinks[0])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviewsForFilm(film.id, 8).then((data) => setReviews(data))
    }, [film.id])

    return (
        <div className={`${styles.wrap} ${styles.translateTop}`}>
            <div className={styles.info}>
                <Poster title={film.title} imgHref={film.titleHref} posterBig />
                <div className={styles.desc}>
                    <FilmNav
                        navList={filmNavLinks}
                        activeNavItem={activeNavItem}
                        setActiveNavItem={setActiveNavItem}
                    />
                    <div className={`${styles.text}`}>
                        {activeNavItem === 'Overview' && film.rating &&
                            <>
                                <Rating
                                    score={film.rating.score}
                                    count={film.rating.count}
                                    level={getRatingLevel(film.rating.score)}
                                />
                                <Overview film={film} />
                            </>
                        }
                        {activeNavItem === 'Details' &&
                            <div className={styles.row}>
                                <Details film={film} />
                            </div>
                        }
                        {activeNavItem === 'Reviews' &&
                            <div className={styles.row}>
                                {reviews.length 
                                    ? <Reviews reviews={reviews} />
                                    : <span >The list is empty</span>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})
