import axios, { AxiosResponse } from "axios";
import { Articles } from "./articleListDTO";
import Link from "next/link";

export default async function Board() {
    const response: AxiosResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_BASE_PORT}/board`
    )

    const articles:Articles =  new Articles(response);

    return (
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
    )

}