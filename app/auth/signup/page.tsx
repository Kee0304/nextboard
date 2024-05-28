"use client"

import { SubmitButton } from "@/component/submit/submit";
import axios from "axios";
import { useState } from "react"
import styles from '../auth.module.css';

export default function SignUpPage() {
    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signUpData: SignUpDTO = {
        userId: userId,
        password: password,
        email: email
    }

    async function signUp(signUpData: SignUpDTO) {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_BASE_PORT}/user/signup`,
            signUpData
        )

        console.log(response)
    }

    return (
        <div className={styles.pagecontent}>
            <div className={styles.boxcontent}>
                <div className="title">회원가입</div>
                <div className={styles.flexcontainer}>
                    <div className="flex-item">
                        <ul>
                            <li className={styles.row}>아이디</li>
                            <li className={styles.row}>비밀번호</li>
                            <li className={styles.row}>이메일</li>
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
                            <li className={styles.inputRow}>
                                <input className={styles.input} type="text" onChange={(e) => setEmail(e.target.value)}></input>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <SubmitButton originalTask={signUp} message="가입하기" data={signUpData}/>
                </div>
            </div>
        </div>
    )
}