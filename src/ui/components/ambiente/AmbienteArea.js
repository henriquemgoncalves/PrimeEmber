import style from '@/styles/components/ambiente/AmbienteArea.module.sass'

export default function AmbienteArea() {
    return(
        <section className={style.ambienteArea}>
            <h1>Nossos <span>Ambientes</span></h1>
            <p>Descubra a combinação perfeita entre sofisticação e sabor na Prime Ember. 
            Nosso salão principal é um espetáculo de elegância, ideal para momentos 
            inesquecíveis e celebrações especiais. Para as famílias, nossa exclusiva 
            área kids oferece um espaço encantador e seguro, onde as crianças se 
            divertem enquanto você desfruta de uma experiência gastronômica única. 
            Venha viver o melhor da alta gastronomia em um ambiente que exala luxo 
            e conforto!</p>
            <div className={style.ambienteAreaImg}>
                <img src="/images/ember.jpg" alt="Imagem Salão Prime Ember" />
                <img src="/images/kids.png" alt="Imagem Area Kids" />
            </div>
        </section>
    )
}