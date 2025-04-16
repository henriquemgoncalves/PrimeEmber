import styles from '@/styles/Cardapio.module.sass'
import BannerCardapio from '@/ui/components/cardapio/BannerCardapio'
import Produtos from '@/ui/components/cardapio/Produtos'

export default function Cardapio(){
    return(
        <main className={styles.cardapio}>
            <BannerCardapio/>
            <Produtos/>
        </main>
    )
}