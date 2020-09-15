import styles from '../../styles/Desktop.module.css'
import {Fade,Zoom} from 'react-reveal';
import Login from '../login'
import { Typography } from '@material-ui/core';

function Mobile() {
     return (
      <div className={styles.screen}>
        <div className={styles.banner}>
          <Zoom>
          <div className={styles.sLogo}></div>
          </Zoom>
        </div>
        <div className={styles.login}>
          <Login />
        </div>
      </div>
    )
}

export default Mobile
  