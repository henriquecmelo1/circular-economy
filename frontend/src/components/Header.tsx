import React from 'react';
import styles from './Header.module.css';



const Header: React.FC = () => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logoLink}>
            <img src="src/assets/ecorecitec.png" alt="Logo Ecorecitec" className={styles.logoIcon}/>
            <span className={styles.logoText}>EcoRecitec</span>
          </a>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>
              {/* fazer página de tabela  vvv*/}
              <a href="/caixa-de-mensagens" className={styles.btnNav}>Caixa de Mensagens</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;