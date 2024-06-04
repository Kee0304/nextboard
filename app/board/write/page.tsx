"use client"

import { useState } from "react"
import styles from './write.module.css'
import { postArticleDTO } from "./postArticleDTO";
import axios from "axios";
import { SubmitButton } from "@/component/submit/submit";
import { useRouter } from "next/navigation";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const data: postArticleDTO = {
        title: title,
        description: description
    }
    async function postArticle(data: any) {

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/board`,
            data,
            {
                withCredentials: true
            }
        )

        if (response.status === 201) {
            router.push(`/board/${response.data.postUid}`)
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
                    <SubmitButton originalTask={postArticle} message='저장' data={data}></SubmitButton> <button>취소</button>
                </div>
            </div>
        </div>
    )
}