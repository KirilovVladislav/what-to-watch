import styles from './Btn-border.module.css'


export const BtnBorder = ({title, handleClick, small}) => {
    return (
        <button
            className={`${styles.button} ${small && styles.small}`}
            onClick={handleClick}>
            {title}
        </button>
    )
}