
import styles from './CorePrinciples.module.css';

interface Principle {
  icon: string;
  title: string;
  text: string;
}

const principles: Principle[] = [

  { icon: '♻️', title: 'Desperdício Zero', text: 'Eliminar desperdícios por meio do design de produtos para uso contínuo e regenerativo' },
  { icon: '🌿', title: 'Materiais Sustentáveis', text: 'Usar materiais renováveis, biodegradáveis e reciclados em todo o processo de produção.' },
  { icon: '📈', title: 'Crescimento Econômico', text: 'Criar novas oportunidades de negócio enquanto reduz o impacto ambiental.' },
  { icon: '🌍', title: 'Impacto Global', text: 'Enfrentar mudanças climáticas por meio da transformação da economia.' },
  { icon: '👥', title: 'Foco na Comunidade', text: 'Construir redes locais que apoiam o compartilhamento, a reparação e a reutilização de recursos.' },
  { icon: '💡', title: 'Inovação', text: 'Impulsionar o avanço tecnológico em design e fabricação sustentáveis.' }
];

const PrincipleCard: React.FC<Principle> = ({ icon, title, text }) => (
  <div className={styles.principleCard}>
    <div className={styles.cardIcon}>{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const CorePrinciples: React.FC = () => {
  return (<>
    <section className={styles.principlesSection} id="core-principles">
      <h2>Princípios da Economia Circular</h2>
      <p className="section-subtitle">
        A economia circular é guiada por princípios fundamentais que transformam a forma como produzimos e consumimos. Aqui estão os pilares que sustentam essa revolução:
      </p>
      <div className={styles.principlesGrid}>
        {principles.map((principle, index) => (
          <PrincipleCard key={index} icon={principle.icon} title={principle.title} text={principle.text} />
        ))}
      </div>
      <a href="#statistics" className="scroll-down-arrow">↓</a>
    </section>
    </>
  );
};

export default CorePrinciples;