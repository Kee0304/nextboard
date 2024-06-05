'use client'

import { SubmitButton } from "@/component/submit/submit";
import axios from "axios";
import { useState } from "react"
import styles from '../auth.module.css';
import { SignInDTO } from "./signInDTO";
import { useRouter } from "next/navigation";
import axi from "@/utils/customaxios";

export default function SignUpPage() {
    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const signInData: SignInDTO = {
        userId: userId,
        password: password,
    }

    async function signIn(signInData: SignUpDTO) {
        const response = await axi.post(
            `auth/signin`,
            signInData)
        console.log(`response = ${response.data}`)
        if (response.status === 200) {
            router.push(
                '/board'
            )
        }
    }

    return (
        <div className={styles.pagecontent}>
            <div className={styles.boxcontent}>
                <div className="title">로그인</div>
                <div className={styles.flexcontainer}>
                    <div className="flex-item">
                        <ul>
                            <li className={styles.row}>아이디</li>
                            <li className={styles.row}>비밀번호</li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <ul>
                            <li className={styles.inputRow}>
                                <input className={styles.input} type="text" onChange={(e) => setId(e.target.value)}></input>
                            </li>
                            <li className={styles.inputRow}>
                                <input className={styles.input} type="text" onChange={(e) => setPassword(e.target.value)}></input>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <SubmitButton originalTask={signIn} message="로그인" data={signInData}/>
                </div>
            </div>
        </div>
    )
}