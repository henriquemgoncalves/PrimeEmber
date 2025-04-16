import BannerAmbiente from "@/ui/components/ambiente/BannerAmbiente";
import style from '@/styles/Ambiente.module.sass';
import AmbienteArea from "@/ui/components/ambiente/AmbienteArea";

export default function Ambiente(){
    return (
        <main className={style.ambiente}>
            <BannerAmbiente/>
            <AmbienteArea/>
        </main>
    )
}