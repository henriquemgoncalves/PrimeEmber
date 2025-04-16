import Link from "next/link";
import { GoHome } from "react-icons/go";
import style from '@/styles/components/BtnHome.module.sass'

export default function BtnHome() {
  return (
    <>
        <Link className={style.btn} href="/">
            <GoHome/>
        </Link>
    </> 
  )
}