import React from 'react';
import styles from '../styles/Statistics.module.css';

interface Stat {
    value: string;
    label: string;
}

const stats: Stat[] = [
    { value: '2.6B', label: 'Toneladas de desperdício geradas anualmente' },
    { value: '80%', label: 'Dos materias poderiam ser reutilizados' },
    { value: 'R$24T', label: 'Benefícios econômicos potenciais' },
    { value: '100M', label: 'Trabalhos seriam criados' }
];

const StatCard: React.FC<Stat> = ({ value, label }) => (
    <div className={styles.statCard}>
        <p className={styles.statValue}>{value}</p>
        <p className={styles.statLabel}>{label}</p>
    </div>
);

const Statistics: React.FC = () => {
    return (
        <section className={styles.statsSection} id="statistics">
            <h2>Os Números Falam</h2>
            <p className={styles.sectionSubtitle}>Compreendendo a escala de oportunidade de transicionar para a economia circular</p>
            <div className={styles.statsContainer}>
                {stats.map((stat) => (
                    <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
            </div>
      <a href="#contact" className={styles.scrollDownArrow}>↓</a>
        </section>
    );
};

export default Statistics;