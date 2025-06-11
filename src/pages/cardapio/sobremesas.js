import style from "@/styles/components/cardapio/Sobremesas/Sobremesas.module.sass";

const itens = [
    {
        id: 1,
        img: "/images/cardapio/sobremesas/sobre_1.jpg",
    },
    {
        id:2,
        img: "/images/cardapio/sobremesas/sobre_2.jpg",
    },
    {
        id: 3,
        img: "/images/cardapio/sobremesas/sobre_3.jpg",
    },
    {
        id: 4,
        img: "/images/cardapio/sobremesas/sobre_4.jpg",
    },
    {
        id: 5,
        img: "/images/cardapio/sobremesas/sobre_5.jpg",
    },
    {
        id: 6,
        img: "/images/cardapio/sobremesas/sobre_6.jpg",
    },
    {
        id: 7,
        img: "/images/cardapio/sobremesas/sobre_7.jpg",
    },
    {
        id: 8,
        img: "/images/cardapio/sobremesas/sobre_8.jpg",
    },
    {
        id: 9,
        img: "/images/cardapio/sobremesas/sobre_9.jpg",
    },
    {
        id: 10,
        img: "/images/cardapio/sobremesas/sobre_10.jpg",
    },
]

export default function Buffet(){
    return (
        <section className={style.sobreContainer}>
                    <h1 className={style.sobreTitle}>Nossos <span>Doces</span></h1>
                    <p>
                        Nossas sobremesas são o final perfeito para sua experiência na Prime Ember. Com receitas exclusivas, ingredientes selecionados e apresentações irresistíveis, cada doce é preparado para encantar seu paladar. De clássicos sofisticados a criações autorais, nossas sobremesas proporcionam momentos de puro prazer e tornam sua visita ainda mais especial.
                    </p>
                    <div className={style.items}>
                        {itens.map((item) => (
                            <div key={item.id} className={style.item}>
                                <img src={item.img} alt={item.name}/>
                                {/* <h2 className="itemName">{item.name}</h2> */}
                            </div>
                        ))}
                    </div>
                </section>
    )
}