import style from '@/styles/components/cardapio/Carnes/Carnes.module.sass';

const carnes = [
    {
        id: 1,
        name: "Picanha",
        img: "/images/cardapio/carnes/picanha.jpg",
    },
    {
        id:2,
        name: "Alcatra",
        img: "/images/cardapio/carnes/Alcatra.jpg",
    },
    {
        id: 3,
        name: "Beef Ancho",
        img: "/images/cardapio/carnes/Beef-Ancho.jpg",
    },
    {
        id: 4,
        name: "Costela Premium",
        img: "/images/cardapio/carnes/Costela-Premium.jpg",
    },
    {
        id: 5,
        name: "Fraldinha",
        img: "/images/cardapio/carnes/Fraldinha.jpg",
    },
    {
        id: 6,
        name: "Paleta de Cordeiro",
        img: "/images/cardapio/carnes/Paleta-de-Cordeiro.jpg",
    },
]

export default function Carnes() {
    return (
        <section className={style.carnesContainer}>
            <h1 className={style.carnesTitle}>Nossos <span>Cortes</span></h1>
            <p>
                Nossas carnes são cuidadosamente selecionadas para oferecer o melhor em sabor, maciez e qualidade. Cada corte é preparado com excelência, destacando o que há de mais nobre na gastronomia. Da suculência da picanha à sofisticação da paleta de cordeiro, nossos cortes são perfeitos para proporcionar uma experiência única e inesquecível aos amantes de churrasco.
            </p>
            <div className={style.items}>
                {carnes.map((item) => (
                    <div key={item.id} className={style.item}>
                        <img src={item.img} alt={item.name}/>
                        <h2 className="itemName">{item.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
};