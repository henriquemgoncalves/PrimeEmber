import style from "@/styles/components/cardapio/Drinks/Drinks.module.sass";

const itens = [
    {
        id: 1,
        img: "/images/cardapio/drinks/drink_1.jpg",
    },
    {
        id:2,
        img: "/images/cardapio/drinks/drink_2.jpg",
    },
    {
        id: 3,
        img: "/images/cardapio/drinks/drink_3.jpg",
    },
    {
        id: 4,
        img: "/images/cardapio/drinks/drink_4.jpg",
    },
    {
        id: 5,
        img: "/images/cardapio/drinks/drink_5.jpg",
    },
    {
        id: 6,
        img: "/images/cardapio/drinks/drink_6.jpg",
    },
]

export default function Buffet(){
    return (
        <section className={style.drinkContainer}>
                    <h1 className={style.drinkTitle}>Nossos <span>Drinks</span></h1>
                    <p>
                        Nossa carta de drinks é um convite para uma experiência sofisticada e refrescante. Com opções clássicas e autorais, cada drink é preparado com ingredientes selecionados e apresentação impecável. Surpreenda-se com sabores marcantes, combinações exclusivas e o toque especial que só a Prime Ember oferece para tornar seus momentos ainda mais memoráveis.
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