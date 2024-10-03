import React from 'react'
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse</h3>
        {/* &copy; is a different way to show a copyright symbol */}
        <p>Mini Blog &copy; 2024</p>
    </footer>
  )
}

export default Footer