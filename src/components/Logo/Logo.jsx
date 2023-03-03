import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../app/const'
import styles from './Logo.module.css'

export const Logo = memo(({ light }) => {
    const location = useLocation()

    const pathTo = location.pathname === routes.Main ? routes.MyList : routes.Main

    return (
        <div>
            <Link to={pathTo} className={`${styles.link} ${light && styles.linkLight}`}>
                <span className={`${styles.letter} ${styles.letter1}`}>W</span>
                <span className={`${styles.letter} ${styles.letter2}`}>T</span>
                <span className={`${styles.letter} ${styles.letter3}`}>W</span>
            </Link>
        </div>
    )
})