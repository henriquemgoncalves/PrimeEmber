import style from '@/styles/components/cardapio/Carnes/Carnes.module.sass';

const carnes = [
    {
        id: 1,
        name: "Picanha",
        description: "A picanha é um corte de carne bovina muito apreciado no Brasil, conhecido por sua suculência e sabor intenso. É frequentemente grelhada ou assada, e é um dos cortes mais populares em churrascos.",
        img: "/images/cardapio/carnes/picanha.jpg",
    },
    {
        id:2,
        name: "Alcatra",
        description: "A alcatra é um corte de carne bovina que inclui a parte traseira do animal. É conhecida por sua maciez e sabor, sendo ideal para grelhados e assados.",
        img: "/images/cardapio/carnes/Alcatra.jpg",
    },
    {
        id: 3,
        name: "Beef Ancho",
        description: "O beef ancho é um corte de carne bovina que vem da parte dianteira do animal, conhecido por sua suculência e sabor intenso. É ideal para grelhados e churrascos.",
        img: "/images/cardapio/carnes/Beef-Ancho.jpg",
    },
    {
        id: 4,
        name: "Costela Premium",
        description: "A costela premium é um corte nobre e suculento, extraído da parte mais macia da costela bovina. Com seu sabor marcante e textura única, é perfeita para churrascos e assados que impressionam pelo aroma e pela maciez incomparável.",
        img: "/images/cardapio/carnes/Costela-Premium.jpg",
    },
    {
        id: 5,
        name: "Fraldinha",
        description: "A fraldinha é um corte de carne bovina que vem da parte inferior do abdômen do animal. É conhecida por sua maciez e sabor, sendo ideal para grelhados e assados.",
        img: "/images/cardapio/carnes/Fraldinha.jpg",
    },
    {
        id: 6,
        name: "Paleta de Cordeiro",
        description: "A paleta de cordeiro é um corte suculento e saboroso, extraído da parte dianteira do animal. Ideal para assados lentos, seu sabor marcante e textura macia a tornam uma escolha perfeita para pratos especiais.",
        img: "/images/cardapio/carnes/Paleta-de-Cordeiro.jpg",
    },
]

export default function Carnes() {
    return (
        <section className={style.carnesContainer}>
            <div className={style.bannerCarneImg}>
                <img className={style.backImg} src="/images/bg-contact.jpg" alt="Banner do Carnes"/>
            </div>
            <h1 className={style.carnesTitle}>Nossos <span>Cortes</span></h1>
            <p>
                Nossas carnes são cuidadosamente selecionadas para oferecer o melhor em sabor, maciez e qualidade. Cada corte é preparado com excelência, destacando o que há de mais nobre na gastronomia. Da suculência da picanha à sofisticação da paleta de cordeiro, nossos cortes são perfeitos para proporcionar uma experiência única e inesquecível aos amantes de churrasco.
            </p>
            <div className={style.items}>
                {carnes.map((item) => (
                    <div key={item.id} className={style.item}>
                        <img src={item.img} alt={item.name}/>
                        {/* <h2 className="itemName">{item.name}</h2> */}
                        <h4 className="itemDescription">{item.description}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
};