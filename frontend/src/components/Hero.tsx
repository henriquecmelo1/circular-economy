import styles from './Hero.module.css';

const Hero = () => {



    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroIcon}>♻️</div>
            <h1>Economia Cricular</h1>
            <p className={styles.subtitle}>Transformando desperdício em valor</p>
            <p className={styles.description}>
                Se junte à revolução que está transformando a forma como produzimos, consumimos e descartamos. Construa um futuro sustentável onde nada se perde e tudo tem valor.
            </p>
            <div className={styles.heroButtons}>
                <a href="#core-principles" className={`${styles.btn} ${styles.btnPrimary}`}>Saiba Mais</a>
                <a href="#contact"className={`${styles.btn} ${styles.btnSecondary}`}>Entre em Contato</a>
            </div>
            <a href="#core-principles" className="scroll-down-arrow">↓</a>
        </div>
    );
};

export default Hero;