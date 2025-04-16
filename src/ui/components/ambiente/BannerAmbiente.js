import styles from '@/styles/components/ambiente/BannerAmbiente.module.sass'

export default function BannerAmbiente() {
    return(
        <section className={styles.bannerAmbiente}>
            <div className={styles.bannerAmbienteImg}>
                <img src="/images/bg-ambiente.jpg" alt="Banner do Ambiente"/>
            </div>
        </section>
    )
}