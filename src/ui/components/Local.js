import style from '@/styles/components/Local.module.sass';

export default function Local() {
    return(
        <section className={style.local}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29241.03030323657!2d-46.596095999999996!3d-23.6355584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1750727143851!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </section>
    )
}