import style from "@/styles/components/cardapio/Buffet/Buffet.module.sass";

const itens = [
    {
        id: 1,
        img: "/images/cardapio/buffet/buff_1.jpg",
    },
    {
        id:2,
        img: "/images/cardapio/buffet/buff_2.jpg",
    },
    {
        id: 3,
        img: "/images/cardapio/buffet/buff_3.jpg",
    },
    {
        id: 4,
        img: "/images/cardapio/buffet/buffet-4.jpg",
    },
    {
        id: 5,
        img: "/images/cardapio/buffet/buffet-5.jpg",
    },
    {
        id: 6,
        img: "/images/cardapio/buffet/buffet-6.jpg",
    },
    {
        id: 7,
        img: "/images/cardapio/buffet/buffet-7.jpg",
    },
    {
        id: 8,
        img: "/images/cardapio/buffet/buffet-8.jpg",
    },
    {
        id: 9,
        img: "/images/cardapio/buffet/buffet-9.jpg",
    },
    {
        id: 10,
        img: "/images/cardapio/buffet/buffet-10.jpg",
    },
    {
        id: 11,
        img: "/images/cardapio/buffet/buffet-11.jpg",
    },
    {
        id: 12,
        img: "/images/cardapio/buffet/buffet-12.jpg",
    },
]

export default function Buffet(){
    return (
        <section className={style.buffetContainer}>
                    <h1 className={style.buffetTitle}>Nosso <span>Buffet</span></h1>
                    <p>
                        Nosso buffet é um verdadeiro espetáculo de sabores e variedade, pensado para agradar todos os paladares. Com uma seleção impecável de pratos quentes, saladas frescas, acompanhamentos sofisticados e opções exclusivas, proporcionamos uma experiência gastronômica completa. Cada detalhe é cuidadosamente preparado para que você desfrute do melhor da culinária em um ambiente elegante e acolhedor.
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