import style from "@/styles/components/Footer.module.sass";

export default function Footer() {
    return(
        <footer className={style.footerContainer}>
            <div className={style.footerContent}>
                <p>
                    &copy;{new Date().getFullYear()} - <span>P</span>rime <span>E</span>mber. All rights reserved.
                </p>
                <h4>Desenvolvido por Henrique</h4>
            </div>
        </footer>
    )
}