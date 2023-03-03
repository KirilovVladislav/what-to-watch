import styles from './Film-nav.module.css'


export const FilmNav = ({ navList, activeNavItem, setActiveNavItem }) => {
    return (
        < nav className={styles.nav} >
            <ul className={styles.list}>
                {navList.map((item) =>
                    <li
                        className={`${styles.item} ${item === activeNavItem && styles.itemActive}`}
                        onClick={() => setActiveNavItem(item)}
                        key={item}>
                        <div className={styles.link}>{item}</div>
                    </li>
                )}
            </ul>
        </nav >
    )
}