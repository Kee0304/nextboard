import axios from "axios";

export default async function ArticleDetail({params}: {params:{id:string}}) {
    const detail = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_BASE_PORT}/board/${params.id}`
    )

    return (
        <div>
            <h1>Detail</h1>
            <div>
                <div>
                    title={detail.data.title}
                </div>
                <div>
                    description={detail.data.description}
                </div>
            </div>
        </div>
    )
}