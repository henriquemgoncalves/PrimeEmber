import Link from "next/link";
import styles from "@/styles/components/NavBar.module.sass";

export default function NavBar() {
    return(
        <header className={styles.headerContainer}>
            <nav>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logo.png" alt="Logo Prime Ember"/> 
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link className={styles.link} href="/cardapio">Cardápio</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/ambiente">Ambiente</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/contato">Contato</Link>
                    </li>
                </ul>     
            </nav>
        </header>
    )
}