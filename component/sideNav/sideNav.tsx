"use client"

import Link from "next/link";
import styles from "./sideNav.module.css";
import logoimage from '../../static/image/SideLogo.jpeg'
import { useState } from "react";
import { SubmitButton } from "../submit/submit";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SideNav() {
    const [toggle, setToggle] = useState(true);
    const emptyData = {};
    const router = useRouter();

    async function signOut() {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
            emptyData
        )
        .then((res) => {
            console.log(res)
            router.push('/auth/signin')
        })
        .catch((e) => {console.log(e.message)})
    }

    function switchToggle() {
        setToggle(!toggle);
    }

    return (
        <div className={[styles.sidecontainer, toggle? styles.opened : styles.folded].join(" ")}>
            <div className={styles.sideHead}>
                <div className={styles.logocontainer}>
                    <img src={logoimage.src} className={styles.logoimage}></img>
                </div>
                <div className={styles.buttoncontainer} >
                    <button onClick={switchToggle}>test</button>
                </div>
            </div>
            <div>
                <div>
                    <SubmitButton originalTask={signOut} data={emptyData} message={'로그아웃'} />
                </div>
                <ul>
                    <li>
                       <Link href="/board"> Board </Link> 
                    </li>
                </ul>
            </div>
        </div>
    )
}