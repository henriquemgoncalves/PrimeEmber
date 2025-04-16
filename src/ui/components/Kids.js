import styles from '@/styles/components/Kids.module.sass'

export default function Kids() {
    return (
        <section className={styles.kids}>
            <div className={styles.kidsContainer}>
                <div className={styles.kidsImage}>
                    <img src="/images/kids.png" alt="Prime Ember"/>
                </div>
                <div className={styles.kidsText}>
                    <h1>Espaço Kids: Diversão Garantida para os Pequenos</h1>
                    <p>Enquanto você aproveita o melhor do nosso churrasco, as crianças podem se divertir em um ambiente seguro e cheio de atividades. Nosso espaço kids foi pensado para proporcionar momentos inesquecíveis para toda a família.</p>
                </div>
            </div>
        </section>
    )
}