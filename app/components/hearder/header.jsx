"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import LogoImage from "@/assets/logo.png"
import Classes from "./main-header.module.css"


export default function MainHeader(){
    const path  = usePathname();
return(
<header className={Classes.header}>
<Link href="/" className={Classes.logo}> <Image src={LogoImage} alt="a plate with food on it" priority ></Image> next Level  food</Link>
<nav className={Classes.nav}>
    <ul>
        <li>
            <Link href="meals" >  browse meals</Link>

        </li>
        <li>
            <Link href='/community' > community</Link>
        </li>
    </ul>
</nav>
</header>
)
}