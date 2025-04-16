import styles from "@/styles/components/Featured.module.sass";
import Link from "next/link";

export default function Featured() {
  return (
    <section className={styles.featured}>
      <h1>Destaques do <span>Nosso Menu</span></h1>
      <div className={styles.itensImage}>
        <div className={styles.imageContainer}>
          <Link href="/cardapio/carnes">
            <img className={styles.image} src="/images/steak.jpg" alt="Imagem destaque" />
            <div className={styles.hoverText}>Carnes</div>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/cardapio/buffet">
            <img className={styles.image} src="/images/buffet.jpg" alt="Imagem destaque" />
            <div className={styles.hoverText}>Buffet</div> 
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/cardapio/drinks">
            <img className={styles.image} src="/images/cocktail.jpg" alt="Imagem destaque" />
            <div className={styles.hoverText}>Drinks</div>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/cardapio/sobremesas">
            <img className={styles.image} src="/images/baklava.png" alt="Imagem destaque" />
            <div className={styles.hoverText}>Sobremesa</div>
          </Link>
        </div>
      </div>
      <p>Descubra os pratos que definem a essência da <span>P</span>rime <span>E</span>mber. De cortes nobres a drinks exclusivos, cada item é preparado com maestria para proporcionar uma experiência gastronômica inesquecível.</p>
    </section>
  );
}