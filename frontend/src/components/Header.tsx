import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <img src="/ecorecitec.png" alt="Logo Ecorecitec" className={styles.logoIcon}/>
            <span className={styles.logoText}>EcoRecitec</span>
          </Link>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="/#contact">Contato</a>
            </li>
            <li>
              <Link to="/caixa-de-mensagens" className={styles.btnNav}>Caixa de Mensagens</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;