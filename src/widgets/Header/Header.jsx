import { Logo } from '../../components'
import styles from './Header.module.css'


export const Header = ({ children }) => {
	return (
		<header className={`${styles.header} ${styles.head}`}>
			<Logo />
			{children}
		</header>
	)
}
