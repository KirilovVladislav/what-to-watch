import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { routes } from '../../app/const'
import { useAuthHandlers } from '../../hooks'
import styles from './User-block.module.css'


export const UserBlock = memo(({ stylesParam = '' }) => {
	const { id: userId } = useSelector((state) => state.user)
	const { logout } = useAuthHandlers()

	const handleClickSingOut = () => {
		try {
			logout()
		} catch (error) {
			const errorCode = error.code
			console.log(errorCode)
		}
	}

	return (
		<ul className={styles.userBlock}>
			<li className={styles.item}>
				<span className={styles.avatar} >
					{userId &&
						<Link to={routes.MyList} >
							<img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
						</Link>
					}
				</span>
			</li>
			<li className={styles.item}>
				{userId
					? <Link onClick={handleClickSingOut} className={styles.link}>Sign out</Link>
					: <Link to={routes.SignIn} className={`${styles.link} ${stylesParam}`}>Sign in</Link>
				}
			</li>
		</ul>
	)
})
