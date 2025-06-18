import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`container ${styles.headerWrapper}`}>
           
            <h1 className={styles.title} >Сникерс - магазин</h1>
        <nav className={styles.navigation}>
            <NavLink
            className={({isActive})=> (isActive ? styles.activeLink: styles.navLink)} //true
             to='/'
            
             >главная </NavLink>
              <NavLink
              className={({isActive})=> (isActive ? styles.activeLink: styles.navLink)}
               to='/cart'
              
              >корзина</NavLink>
                <NavLink
                className={({isActive})=> (isActive ? styles.activeLink: styles.navLink)}
                 to='/news'
                 >новости</NavLink>
        </nav>
        </div>
        
    </header>
  )
}

export default Header