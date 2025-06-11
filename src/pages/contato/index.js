import style from '@/styles/Contato.module.sass';

export default function Contato(){
    return(
        <main className={style.contato}>
            <img src='/images/logo.png' alt='Logo Prime Ember'/>
            <div className={style.content}>
                <div className={style.horarios}>
                    <h1>Nossos Horários</h1>
                    <ul>
                        <li>Terça à Sexta - 9h às 21h</li>
                        <li>Sábados - 9h às 23h</li>
                        <li>Domingos - 9h às 22h</li>
                    </ul>
                    <p>São Caetano do Sul/SP</p>
                </div>
                
                <div className={style.tel}>
                    <h2>(XX) XXXXX-XXXX</h2>
                </div>
            </div>
        </main>
    )
}