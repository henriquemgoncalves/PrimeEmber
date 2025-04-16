import styles from '@/styles/components/About.module.sass'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                    <h1>Almoços, Happy Hour, Jantar, Festa, Aniversários, Comemorações em geral</h1>
                    <p>Diversas marcas de cervejas nacionais e importadas, além de bebidas destiladas e vinhos.</p>
                </div>
                
                <div className={styles.aboutImage}>
                    <img src="/images/ember.jpg" alt="Prime Ember"/>
                </div>
            </div>
        </section>
    )
}