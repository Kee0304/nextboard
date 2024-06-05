import axios, { AxiosResponse } from "axios";
import { Articles } from "./articleListDTO";
import Link from "next/link";
import styles from './board.module.css'
import axi from "@/utils/customaxios";

export default async function Board() {
    const response: any = await axi.get(
        'board'
    )
    const articles:Articles =  new Articles(response);

    return (
        <div className={styles.boardcontainer}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> TITLE </th>
                            <th> Author </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articles.articles.map((el) => {
                                return (
                                    <tr key={el.postUid}>
                                        <td>
                                            <Link href={`board/${el.postUid.toString()}`}>
                                                {el.title}
                                            </Link>
                                        </td>
                                        <td>
                                            {el.userId}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link href={`board/write`}>
                    <button>글쓰기</button>
                </Link>
            </div>
        </div>
    )

}