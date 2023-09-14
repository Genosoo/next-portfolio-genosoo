"use client"

import styles from './darkMode.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function DarkMode() {
  const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className={styles.darkModeContainer} onClick={toggle}>
        <div className={styles.icon}>🌛</div>
        <div className={styles.icon}>🌞</div>
        <div 
            className={styles.toggleBall} 
            style={mode === "dark" ? { left:"2px" } : { right:"2px" } }
        />
    </div>
  )
}
