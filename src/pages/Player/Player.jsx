import { useNavigate } from 'react-router-dom'
import { BtnCard } from '../../ui'
import styles from './Player.module.css'


const Player = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <h2>This page is under construction</h2>
            <button onClick={goBack}>Go back</button>
            {/* <div className={styles.player}>
                <video src='#' className={styles.video} poster='img/player-poster.jpg'></video>

                <button className={styles.exit}>Exit</button>

                <div className={styles.controls}>
                    <div className={styles.controlsRow}>
                        <div className={styles.time}>
                            <progress className={styles.progress} value='30' max='100'></progress>
                            <div className={styles.toggler} style={{ left: '30%' }}>Toggler</div>
                        </div>
                        <div className={styles.timeValue}>1:30:29</div>
                    </div>

                    <div className={styles.controlsRow}>
                        <button className={styles.play}>
                            <svg viewBox='0 0 19 19' width='19' height='19'>
                                <use xlinkHref='#play-s'></use>
                            </svg>
                            <span>Play</span>
                        </button>
                        <div className={styles.name}>Transpotting</div>
                        <BtnCard
                            positionLeft
                            size={'27'}
                            fileNameSvg={`full-screen`}
                            text={'Full screen'}
                            handleClick={handleClickFullScrean}
                        />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Player