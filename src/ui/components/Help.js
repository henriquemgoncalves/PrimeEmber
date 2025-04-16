import style from '@/styles/components/Help.module.sass'

export default function Help(){
    return (
        <section className={style.help}>
            <p>
                Reserve sua mesa pelo Telefone, Email ou clicando no botão abaixo. 
            </p>
            <a href="https://wa.me/5511940007976" target="_blank" rel="noopener noreferrer">
                Reservar pelo Whatsapp
            </a>
        </section>
    )
}