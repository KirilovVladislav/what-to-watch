import { Link } from 'react-router-dom'
import styles from './Btn-card.module.css'


export const BtnCard = ({ size='19', handleClick, path, text, fileNameSvg, positionLeft }) => {
    return (
        <Link onClick={handleClick} to={path} className={`${styles.btn} ${positionLeft && styles.positionLeft}`}>
            {fileNameSvg &&
                <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
                    <use xlinkHref={`img/icons/${fileNameSvg}.svg#${fileNameSvg}`}></use>
                </svg>
            }
            <span>{text}</span>
        </Link>
    )
}