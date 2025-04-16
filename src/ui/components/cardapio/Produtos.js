import styles from '@/styles/components/cardapio/Produtos.module.sass'
import Link from 'next/link';

export default function Produtos() {
  return (
    <section className={styles.produtos}>
      <h1>Nosso <span>Cardápio</span></h1>
      <nav>
        <ul>
            <li>
                <Link href="/cardapio/carnes">
                    <h3>Carnes</h3> 
                </Link>
            </li>
            <li>
                <Link href="/cardapio/buffet">
                    <h3>Buffet</h3>
                </Link>
            </li>
            <li>
                <Link href="/cardapio/drinks">
                    <h3>Drinks</h3>
                </Link>
            </li>
            <li>
                <Link href="/cardapio/sobremesas">
                    <h3>Sobremesas</h3>
                </Link>
            </li>
        </ul>
      </nav>
      <p>Nosso cardápio é uma celebração dos sabores mais refinados e irresistíveis. Cada prato é cuidadosamente elaborado com ingredientes selecionados, garantindo uma experiência gastronômica única que combina tradição e sofisticação. Aqui, cada detalhe é pensado para encantar o paladar e transformar cada refeição em um momento inesquecível.</p>
      <p>De cortes nobres preparados à perfeição a acompanhamentos que harmonizam com maestria, nosso cardápio é um convite para explorar o melhor da alta gastronomia. Seja para um almoço especial, um jantar elegante ou uma celebração memorável, cada prato reflete nossa paixão por oferecer o melhor aos nossos clientes.</p>
    </section>
  );
}