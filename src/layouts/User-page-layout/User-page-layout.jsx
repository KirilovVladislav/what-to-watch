import { Outlet } from 'react-router-dom'
import styles from './User-page-layout.module.css'


export const UserPageLayout = () => {
    return (
        <div className={styles.userPage}>
            <Outlet />
        </div>
    )
}