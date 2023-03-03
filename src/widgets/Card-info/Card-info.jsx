import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../../app/const'
import { Poster } from '../../components'
import { useMyList } from '../../hooks'
import { BtnCard } from '../../ui'
import styles from './Card-info.module.css'


export const CardInfo = memo(({ film }) => {
    const { id } = useParams()
    const { email, myList } = useSelector((state) => state.user)
    const [handleToggleMyList] = useMyList()

    return (
        <div className={`${styles.wrap} ${styles.info}`}>
            {!id &&
                <Poster title={film.title} imgHref={film.titleHref} />
            }
            <div className={styles.desc}>
                <Link to={`/films/${film.id}`} className={styles.title}>{film.title}</Link>
                <p className={styles.meta}>
                    <span className={styles.genre}>{film.genre}</span>
                    <span >{film.year}</span>
                </p>
                <div className={styles.buttons}>
                    <BtnCard
                        path={`/player/${film.id}`}
                        text={'Play'}
                        fileNameSvg={`play-s`}
                    />
                    <BtnCard
                        path={!email ? routes.SignIn : undefined}
                        text={'My list'}
                        fileNameSvg={myList?.includes(film.id) ? `in-list` : `add`}
                        handleClick={() => handleToggleMyList(film)}
                    />
                    {id &&
                        <BtnCard
                            path={`/films/${id}/review`}
                            text={'Add review'}
                        />
                    }
                </div>
            </div>
        </div>
    )
})