import styles from "@/styles/components/Banner.module.sass";

export default function Banner(){
    return(
        <section className={styles.banner}>
            <video autoPlay loop muted playsInline className={styles.bannerVideo}>
                <source src="/videos/banner.mp4" type="video/mp4"/>
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.bannerContent}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt="Logo"/>
                </div>
                <h1 className="banner-title">O Sabor da Perfeição em Cada Chama</h1>
                <p className="banner-description">Experimente a excelência do churrasco em um ambiente sofisticado e acolhedor.</p>
            </div>
        </section>
    )
}