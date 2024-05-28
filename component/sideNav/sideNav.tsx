"use client"

import Link from "next/link";
import styles from "./sideNav.module.css";
import logoimage from '../../static/image/SideLogo.jpeg'
import { useState } from "react";

export default function SideNav() {
    const [toggle, setToggle] = useState(true);

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
                <ul>
                    <li>
                       <Link href="/board"> Board </Link> 
                    </li>
                </ul>
            </div>
        </div>
    )
}