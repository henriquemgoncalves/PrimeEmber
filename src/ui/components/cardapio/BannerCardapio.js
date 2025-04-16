import styles from '@/styles/components/cardapio/BannerCardapio.module.sass'

export default function BannerCardapio() {
    return(
        <section className={styles.bannerCardapio}>
            <div className={styles.bannerCardapioImg}>
                <img src="/images/bg-menu.png" alt="Banner do Cardapio"/>
            </div>
        </section>
    )
}