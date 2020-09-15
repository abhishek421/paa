import styles from '../../styles/Mobile.module.css'
import Fade from 'react-reveal/Fade';
import Login from '../login'

function Mobile() {
     return (
      <div className={styles.screen}>
        <Fade bottom>
        <div className={styles.sLogo}></div>
        </Fade>
        <Login />
      </div>
    )
}

export default Mobile
  