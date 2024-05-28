"use client"

import { SubmitButton } from "@/component/submit/submit";
import axios from "axios";
import { useState } from "react"
import styles from '../auth.module.css';
import { SignInDTO } from "./signInDTO";

export default function SignUpPage() {
    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");

    const signInData: SignInDTO = {
        userId: userId,
        password: password,
    }

    async function signIn(signInData: SignUpDTO) {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_BASE_PORT}/user/signin`,
            signInData
        )

        console.log(response)
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