"use client"

import { useState } from "react"
import styles from './write.module.css'
import { postArticleDTO } from "./postArticleDTO";
import axios from "axios";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function postArticle() {
        const data: postArticleDTO = {
            title: title,
            description: description
        }

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/board`,
            data
        )

        if (response.status === 201) {
            console.log("success");
        } else {
            console.log(response)
        }
    }

    return (
        <div className={styles.writecontainer}>
            <div className={styles.contentcontainer}>
                <div>
                    title <input onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <div> description </div>
                    <input className={styles.descriptioninput} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={postArticle}>저장</button> <button>취소</button>
                </div>
            </div>
        </div>
    )
}