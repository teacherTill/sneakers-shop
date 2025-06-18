import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagramm from '../../assets/instagramm.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.footerWrapper}`}>
            <div className={styles.contacts}>
                <h2>Контакты</h2>
                <br />
                <p>8 800 000 00 00</p>
                <p>emailexample@email.com</p>
                <div>
                    <p>
                      2024 Сникер-магазин. Все права защищены
                    </p>
                    </div>
            </div>
            <div className={styles.social}>
                <div className={styles.socialLinks}>
                    <Link className={styles.footerLink} to='https://fonts.google.com/selection/embed'><img src={facebook} alt="gbgbwed" /></Link>
                    <Link className={styles.footerLink} to='https://fonts.google.com/selection/embed'><img src={twitter} alt="gbgbwed" /></Link>
                    <Link className={styles.footerLink} to='https://fonts.google.com/selection/embed'><img src={instagramm} alt="gbgbwed" /></Link>
                </div>
                <div>
                    <input className={styles.footerInput} type="text" placeholder='введите текст...' />
                </div>



            </div>
        </div>
    </footer>
  )
}

export default Footer